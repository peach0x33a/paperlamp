// Build the shadcn-compatible registry from registry/ + the docs metadata.
//
// Outputs:
//   registry.json             Registry manifest (shadcn registry schema, file paths only).
//   www/public/r/<name>.json  One registry item per component, with file contents inlined —
//                             what `npx shadcn-vue add <url>` downloads.
//   www/public/r/registry.json  The manifest again, served next to the items.
//
// Dependencies are inferred from imports: bare package imports → `dependencies`,
// `@/components/ui/<x>` imports → `registryDependencies` (absolute URLs under REGISTRY_URL).
//
// Usage: bun run build:registry   (REGISTRY_URL=https://ink.example.com/r to override)

import { readdir } from "node:fs/promises";
import { join, relative } from "node:path";
import tokens from "../registry/styles/tokens.json";

const ROOT = join(import.meta.dir, "..");
const UI = join(ROOT, "registry/ui");
const DEMOS = join(ROOT, "www/src/demos");
const OUT = join(ROOT, "www/public/r");
const BASE = (process.env.REGISTRY_URL ?? "http://localhost:5180/r").replace(/\/$/, "");

const pkg = await Bun.file(join(ROOT, "package.json")).json();
const versions: Record<string, string> = { ...pkg.dependencies, ...pkg.devDependencies };

/** Packages a consumer already has (or that the style item installs). */
const IMPLICIT = new Set(["vue", "clsx", "tailwind-merge"]);

interface FileEntry {
  path: string;
  type: string;
  content?: string;
}
interface Item {
  name: string;
  type: string;
  title?: string;
  description?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files?: FileEntry[];
  cssVars?: Record<string, Record<string, string>>;
  css?: Record<string, unknown>;
}

const pkgName = (spec: string) => (spec.startsWith("@") ? spec.split("/").slice(0, 2).join("/") : spec.split("/")[0]!);

// Docs metadata gives every item a human title/description.
const meta = new Map<string, { title: string; zh: string; description: string; registry?: string[] }>();
for (const dir of await readdir(DEMOS)) {
  const f = join(DEMOS, dir, "meta.ts");
  if (!(await Bun.file(f).exists())) continue;
  const m = (await import(f)).default;
  for (const name of m.registry ?? [dir]) {
    if (!meta.has(name)) meta.set(name, m);
  }
}

const items: Item[] = [];

for (const name of (await readdir(UI)).sort()) {
  const dir = join(UI, name);
  const files = (await readdir(dir)).filter((f) => /\.(vue|ts)$/.test(f)).sort();
  if (!files.length) continue;

  const deps = new Set<string>();
  const regDeps = new Set<string>(["utils"]);
  const entries: FileEntry[] = [];

  for (const file of files) {
    const abs = join(dir, file);
    const content = await Bun.file(abs).text();
    for (const m of content.matchAll(/(?:from|import)\s+["']([^"']+)["']/g)) {
      const spec = m[1]!;
      const ui = spec.match(/^@\/components\/ui\/([^/]+)/);
      if (ui) {
        if (ui[1] !== name) regDeps.add(`${BASE}/${ui[1]}.json`);
      } else if (!spec.startsWith(".") && !spec.startsWith("@/")) {
        const p = pkgName(spec);
        if (!IMPLICIT.has(p)) deps.add(p);
      }
    }
    entries.push({ path: relative(ROOT, abs), type: "registry:ui", content });
  }

  for (const d of deps) {
    if (!versions[d]) throw new Error(`registry/ui/${name} imports "${d}", which is not in package.json`);
  }

  const m = meta.get(name);
  items.push({
    name,
    type: "registry:ui",
    title: m ? `${m.title} ${m.zh}` : name,
    description: m?.description,
    dependencies: [...deps].sort(),
    registryDependencies: [...regDeps],
    files: entries,
  });
}

// The theme itself: CSS variables + typography utilities + base layer.
const css: Record<string, unknown> = {
  "@keyframes fade-up": { from: { opacity: "0", transform: "translateY(10px)" } },
  "@layer base": {
    "*": { "@apply border-border outline-ring/50": {} },
    html: { "color-scheme": "light" },
    "html.dark": { "color-scheme": "dark" },
    body: {
      "@apply bg-background text-foreground font-sans antialiased": {},
      transition: "background-color var(--motion-theme) ease, color var(--motion-theme) ease",
    },
    "::selection": { background: "var(--foreground)", color: "var(--background)" },
  },
};
for (const [name, decl] of Object.entries(tokens.utilities)) css[`@utility ${name}`] = decl;

items.unshift({
  name: "paperlamp",
  type: "registry:style",
  title: "纸灯 / Paperlamp 主题",
  description: "亮暗两套 CSS 变量（shadcn 语义命名 + 纸灯扩展色）、霞鹜文楷 + Fira Code、排版工具类与基础样式。由 DESIGN.md 生成。",
  dependencies: ["tw-animate-css", "lxgw-wenkai-screen-webfont", "@fontsource/fira-code", "lucide-vue-next"],
  registryDependencies: ["utils"],
  cssVars: { theme: tokens.theme, light: tokens.light, dark: tokens.dark },
  css,
});

await Bun.$`rm -rf ${OUT} && mkdir -p ${OUT}`;

const withVersions = (i: Item) => ({
  ...i,
  dependencies: i.dependencies?.map((d) => (versions[d] ? `${d}@${versions[d]}` : d)),
});

for (const item of items) {
  await Bun.write(
    join(OUT, `${item.name}.json`),
    JSON.stringify({ $schema: "https://shadcn-vue.com/schema/registry-item.json", ...withVersions(item) }, null, 2) + "\n",
  );
}

const manifest = {
  $schema: "https://shadcn-vue.com/schema/registry.json",
  name: "paperlamp",
  homepage: BASE.replace(/\/r$/, ""),
  items: items.map((i) => ({
    ...withVersions(i),
    files: i.files?.map(({ path, type }) => ({ path, type })),
  })),
};
const manifestJson = JSON.stringify(manifest, null, 2) + "\n";
await Bun.write(join(ROOT, "registry.json"), manifestJson);
await Bun.write(join(OUT, "registry.json"), manifestJson);

const missingMeta = items.filter((i) => i.type === "registry:ui" && !meta.has(i.name)).map((i) => i.name);
console.log(`registry: ${items.length} items → www/public/r (base ${BASE})`);
if (missingMeta.length) console.warn(`  ⚠ no docs page for: ${missingMeta.join(", ")}`);
