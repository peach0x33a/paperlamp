// Compile DESIGN.md frontmatter tokens into site/tokens.css.
// DESIGN.md is the single source of truth — never edit tokens.css by hand.
// Usage: bun run build:tokens

import { parse } from "yaml";

const src = await Bun.file(new URL("../DESIGN.md", import.meta.url)).text();
const match = src.match(/^---\n([\s\S]*?)\n---/);
if (!match) throw new Error("DESIGN.md has no YAML frontmatter");
const fm = parse(match[1]);

for (const key of ["colors", "colors-dark", "typography", "rounded", "spacing", "shadow", "motion"]) {
  if (!fm[key] || typeof fm[key] !== "object") {
    throw new Error(`DESIGN.md frontmatter is missing the "${key}" token group`);
  }
}
for (const level of ["body-md", "label-md"]) {
  if (!fm.typography[level]?.fontFamily) {
    throw new Error(`DESIGN.md typography is missing "${level}" (needed for the font variables)`);
  }
}

// DESIGN.md token → CSS variable mapping documented in DESIGN.md/STYLE.md:
// neutral=--bg surface=--surface on-surface=--text secondary=--text-muted
// border=--border rounded.md=--radius
const COLOR_VARS: Record<string, string> = {
  neutral: "--bg",
  surface: "--surface",
  "on-surface": "--text",
  secondary: "--text-muted",
  border: "--border",
  primary: "--ink",
  "primary-hover": "--ink-hover",
  overlay: "--overlay",
  accent: "--accent",
  "accent-bar": "--accent-bar",
  "accent-text": "--accent-text",
  "accent-wash": "--accent-wash",
  rating: "--rating",
  featured: "--featured",
  "featured-wash": "--featured-wash",
  warning: "--warning",
  "warning-bar": "--warning-bar",
  "warning-text": "--warning-text",
  "warning-wash": "--warning-wash",
  error: "--error",
};

const emitted = new Set<string>();

function colorBlock(colors: Record<string, string>, indent = "  "): string {
  return Object.entries(colors)
    .map(([name, value]) => {
      const cssVar = COLOR_VARS[name];
      if (!cssVar) throw new Error(`No CSS variable mapping for color token "${name}"`);
      emitted.add(cssVar);
      return `${indent}${cssVar}: ${value};`;
    })
    .join("\n");
}

function emit(cssVar: string, value: unknown): string {
  emitted.add(cssVar);
  return `  ${cssVar}: ${value};`;
}

const lines: string[] = [
  "/* Generated from DESIGN.md by scripts/build-tokens.ts — do not edit. */",
  "",
  ":root {",
  colorBlock(fm.colors),
];

for (const [key, value] of Object.entries(fm.spacing)) lines.push(emit(`--sp-${key}`, value));
for (const [key, value] of Object.entries(fm.rounded)) {
  if (key === "md") lines.push(emit("--radius", value));
  else if (key !== "DEFAULT") lines.push(emit(`--radius-${key}`, value));
}
for (const [key, value] of Object.entries(fm.shadow)) lines.push(emit(`--shadow-${key}`, value));
for (const [key, value] of Object.entries(fm.motion)) lines.push(emit(`--motion-${key}`, value));
lines.push(emit("--font-serif", fm.typography["body-md"].fontFamily));
lines.push(emit("--font-mono", fm.typography["label-md"].fontFamily));

// Per-level typography variables so component CSS never restates raw values.
for (const [name, t] of Object.entries<any>(fm.typography)) {
  lines.push(emit(`--type-${name}-size`, t.fontSize));
  lines.push(emit(`--type-${name}-weight`, t.fontWeight));
  lines.push(emit(`--type-${name}-lh`, t.lineHeight));
  if (t.letterSpacing != null) lines.push(emit(`--type-${name}-ls`, t.letterSpacing));
}
lines.push("}", "");

lines.push("html.dark {", colorBlock(fm["colors-dark"]), "}", "");

// One utility class per typography level, resolved through the variables above.
for (const [name, t] of Object.entries<any>(fm.typography)) {
  const mono = /mono/i.test(t.fontFamily);
  lines.push(
    `.${name} {`,
    `  font-family: var(${mono ? "--font-mono" : "--font-serif"});`,
    `  font-size: var(--type-${name}-size);`,
    `  font-weight: var(--type-${name}-weight);`,
    `  line-height: var(--type-${name}-lh);`,
    ...(t.letterSpacing != null ? [`  letter-spacing: var(--type-${name}-ls);`] : []),
    "}",
    "",
  );
}

const out = new URL("../site/tokens.css", import.meta.url);
await Bun.write(out, lines.join("\n"));

// Bidirectional check: every var(--x) the site consumes must have been emitted.
const consumers = ["../site/styles.css", "../site/index.html", "../site/main.js"];
const missing = new Set<string>();
for (const rel of consumers) {
  const text = await Bun.file(new URL(rel, import.meta.url)).text();
  for (const m of text.matchAll(/var\((--[a-z0-9-]+)[),]/g)) {
    if (!emitted.has(m[1])) missing.add(`${m[1]} (${rel.replace("../", "")})`);
  }
}
if (missing.size) {
  throw new Error(`Site references variables that tokens.css does not emit:\n  ${[...missing].join("\n  ")}`);
}

console.log(`tokens.css written: ${Object.keys(fm.colors).length} colors (+dark), ` +
  `${Object.keys(fm.typography).length} type levels, ${Object.keys(fm.spacing).length} spacing steps; ` +
  `${emitted.size} variables verified against site usage`);
