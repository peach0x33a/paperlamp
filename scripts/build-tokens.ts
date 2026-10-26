// Compile DESIGN.md frontmatter tokens into the Paperlamp theme.
// DESIGN.md is the single source of truth — never edit the generated files by hand.
//
// Outputs:
//   registry/styles/paperlamp.css   Tailwind v4 theme: :root / .dark variables (shadcn
//                                   semantic names + Paperlamp extras), @theme inline
//                                   mapping, typography @utility classes and base layer.
//   registry/styles/tokens.json     The same variables as data (consumed by
//                                   build-registry.ts to emit the `cssVars` of the
//                                   `paperlamp` style item).
//
// Usage: bun run build:tokens

import { parse } from "yaml";

const src = await Bun.file(new URL("../DESIGN.md", import.meta.url)).text();
const match = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
if (!match) throw new Error("DESIGN.md has no YAML frontmatter");
const fm = parse(match[1]);

for (const key of ["colors", "colors-dark", "typography", "rounded", "spacing", "shadow", "motion"]) {
  if (!fm[key] || typeof fm[key] !== "object") {
    throw new Error(`DESIGN.md frontmatter is missing the "${key}" token group`);
  }
}

type Palette = Record<string, string>;

/** Fractional neutral fill, built from a token exactly as DESIGN.md prescribes (20–60% washes). */
const wash = (color: string, pct: number) => `color-mix(in oklab, ${color} ${pct}%, transparent)`;

function need(p: Palette, name: string, mode: string): string {
  const v = p[name];
  if (!v) throw new Error(`DESIGN.md ${mode} palette is missing color "${name}"`);
  return v;
}

/**
 * DESIGN.md token → shadcn semantic variable.
 *
 * shadcn names are kept verbatim so components copied from shadcn-vue keep working;
 * where shadcn semantics collide with Paperlamp token names the shadcn meaning wins
 * and the Paperlamp family is re-exposed under its own name:
 *   - shadcn `secondary` / `muted` / `accent` are quiet neutral fills (DESIGN.md
 *     "Quiet neutral fills are built from border at fractional opacity").
 *   - DESIGN.md `secondary` (muted text)     → --muted-foreground
 *   - DESIGN.md `accent*` (indigo family)    → --indigo / --indigo-bar / --indigo-text / --indigo-wash
 *   - DESIGN.md `error`                      → --destructive (text only, never a fill)
 */
function semantic(p: Palette, mode: string): Record<string, string> {
  const c = (n: string) => need(p, n, mode);
  return {
    background: c("neutral"),
    foreground: c("on-surface"),
    card: c("surface"),
    "card-foreground": c("on-surface"),
    popover: c("surface"),
    "popover-foreground": c("on-surface"),
    primary: c("primary"),
    "primary-hover": c("primary-hover"),
    "primary-foreground": c("neutral"),
    secondary: wash(c("border"), 60),
    "secondary-foreground": c("on-surface"),
    muted: wash(c("border"), 40),
    "muted-foreground": c("secondary"),
    accent: wash(c("border"), 50),
    "accent-foreground": c("on-surface"),
    destructive: c("error"),
    border: c("border"),
    input: c("border"),
    ring: c("primary"),
    overlay: c("overlay"),
    indigo: c("accent"),
    "indigo-bar": c("accent-bar"),
    "indigo-text": c("accent-text"),
    "indigo-wash": c("accent-wash"),
    rating: c("rating"),
    featured: c("featured"),
    "featured-wash": c("featured-wash"),
    "featured-border": c("featured-border"),
    warning: c("warning"),
    "warning-bar": c("warning-bar"),
    "warning-text": c("warning-text"),
    "warning-wash": c("warning-wash"),
  };
}

const light = semantic(fm.colors, "colors");
const dark = semantic(fm["colors-dark"], "colors-dark");

// Non-color variables live only in :root (shared by both themes).
const r = fm.rounded;
const root: Record<string, string> = {
  radius: r.md,
  "font-serif": fm.typography["body-md"].fontFamily,
  "font-mono": fm.typography["label-md"].fontFamily,
};
for (const [k, v] of Object.entries<string>(fm.motion)) root[`motion-${k}`] = v;

// @theme inline: expose everything as Tailwind utilities (bg-primary, text-indigo-text, …).
const theme: Record<string, string> = {};
for (const name of Object.keys(light)) theme[`color-${name}`] = `var(--${name})`;
theme["font-sans"] = "var(--font-serif)";
theme["font-serif"] = "var(--font-serif)";
theme["font-mono"] = "var(--font-mono)";
// Two working radius tiers + toast tier, all derived from --radius so one variable retunes
// the whole system (the /create builder edits it). Ratios come from DESIGN.md: 4 / 8 / 12px.
const px = (v: string) => {
  const m = String(v).match(/^([\d.]+)(px|rem)$/);
  if (!m) throw new Error(`DESIGN.md rounded value "${v}" must be px or rem`);
  return Number(m[1]) * (m[2] === "rem" ? 16 : 1);
};
const ratio = (v: string) => +(px(v) / px(r.md)).toFixed(4);
theme["radius-sm"] = `calc(var(--radius) * ${ratio(r.sm)})`;
theme["radius-md"] = "var(--radius)";
theme["radius-lg"] = `calc(var(--radius) * ${ratio(r.lg)})`;
for (const [k, v] of Object.entries<string>(fm.shadow)) theme[`shadow-${k}`] = v;
theme["container-content"] = fm.spacing.container;
theme["ease-quiet"] = fm.motion.easing;
theme["animate-fade-up"] = `fade-up ${fm.motion.entrance} ${fm.motion["easing-entrance"]} both`;

const block = (sel: string, vars: Record<string, string>, indent = "  ") =>
  [`${sel} {`, ...Object.entries(vars).map(([k, v]) => `${indent}--${k}: ${v};`), "}"].join("\n");

const out: string[] = [
  "/* Generated from DESIGN.md by scripts/build-tokens.ts — do not edit. */",
  "/* Usage: @import \"tailwindcss\"; @import \"tw-animate-css\"; @import \"./paperlamp.css\"; */",
  "",
  "@custom-variant dark (&:is(.dark *));",
  "",
  block(":root", { ...root, ...light }),
  "",
  block(".dark", dark),
  "",
  block("@theme inline", theme),
  "",
  "@keyframes fade-up {",
  "  from { opacity: 0; transform: translateY(10px); }",
  "}",
  "",
];

// One utility per typography level: `class="headline-md"`, `class="label-xs"`…
const utilities: Record<string, Record<string, string>> = {};
for (const [name, t] of Object.entries<any>(fm.typography)) {
  const mono = /mono/i.test(t.fontFamily);
  utilities[name] = {
    "font-family": `var(${mono ? "--font-mono" : "--font-serif"})`,
    "font-size": t.fontSize,
    "font-weight": String(t.fontWeight),
    "line-height": String(t.lineHeight),
    ...(t.letterSpacing != null ? { "letter-spacing": t.letterSpacing } : {}),
  };
  out.push(
    `@utility ${name} {`,
    `  font-family: var(${mono ? "--font-mono" : "--font-serif"});`,
    `  font-size: ${t.fontSize};`,
    `  font-weight: ${t.fontWeight};`,
    `  line-height: ${t.lineHeight};`,
    ...(t.letterSpacing != null ? [`  letter-spacing: ${t.letterSpacing};`] : []),
    "}",
    "",
  );
}

const base = `@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  html {
    color-scheme: light;
  }
  html.dark {
    color-scheme: dark;
  }
  body {
    @apply bg-background text-foreground font-sans antialiased;
    transition: background-color var(--motion-theme) ease, color var(--motion-theme) ease;
  }
  ::selection {
    background: var(--foreground);
    color: var(--background);
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: ${r.sm};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--muted-foreground);
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}
`;
out.push(base);

const css = out.join("\n");
await Bun.write(new URL("../registry/styles/paperlamp.css", import.meta.url), css);
await Bun.write(
  new URL("../registry/styles/tokens.json", import.meta.url),
  JSON.stringify(
    { theme, light: { ...root, ...light }, dark, utilities, radiusSm: r.sm, entrance: theme["animate-fade-up"] },
    null,
    2,
  ) + "\n",
);

console.log(
  `paperlamp.css written: ${Object.keys(light).length} semantic colors (+dark), ` +
    `${Object.keys(fm.typography).length} type utilities, ${Object.keys(fm.shadow).length} shadows.`,
);
