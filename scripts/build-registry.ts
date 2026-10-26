// Build the Paperlamp registry that `npx paperlamp add` reads.
//
// Outputs (served statically by the docs site):
//   www/public/r/index.json    Every item without file contents: name, type, title, category.
//   www/public/r/<name>.json   One item with its files inlined.
//
// Item types:
//   style  the theme — paperlamp.css (generated from DESIGN.md) plus the CSS imports it needs
//   lib    helpers such as utils (cn)
//   ui     a component directory under registry/ui/
//
// Dependencies are inferred from imports: bare package imports → `dependencies` (pinned to
// the versions in package.json), `@/components/ui/<x>` and `@/lib/<x>` → `registryDependencies`
// by item name. Names are resolved against whatever registry URL the CLI was given, so the
// output is the same no matter where it is hosted.
//
// Usage: bun run build:registry

import { mkdir, readdir, rm } from "node:fs/promises";
import { basename, join } from "node:path";

const ROOT = join(import.meta.dir, "..");
const UI = join(ROOT, "registry/ui");
const LIB = join(ROOT, "registry/lib");
const DEMOS = join(ROOT, "www/src/demos");
const OUT = join(ROOT, "www/public/r");

const pkg = await Bun.file(join(ROOT, "package.json")).json();
const versions: Record<string, string> = { ...pkg.dependencies, ...pkg.devDependencies };

/** Packages every Vue project already has. */
const IMPLICIT = new Set(["vue"]);

type Target = "ui" | "lib" | "css";
interface FileEntry {
  /** Path relative to the target directory, e.g. "badge/Badge.vue" or "utils.ts". */
  path: string;
  target: Target;
  content: string;
}
interface Item {
  name: string;
  type: "style" | "lib" | "ui";
  title: string;
  description?: string;
  category?: string;
  dependencies: string[];
  registryDependencies: string[];
  /** style only: lines the CLI adds to the user's main CSS file, in order. */
  cssImports?: string[];
  files: FileEntry[];
}

const pkgName = (spec: string) => (spec.startsWith("@") ? spec.split("/").slice(0, 2).join("/") : spec.split("/")[0]!);
const pin = (name: string) => {
  if (!versions[name]) throw new Error(`"${name}" is used by the registry but missing from package.json`);
  return `${name}@${versions[name]}`;
};

/** Scan imports: npm packages and other registry items. */
function scan(content: string, self: string, deps: Set<string>, regDeps: Set<string>) {
  for (const m of content.matchAll(/(?:from|import)\s+["']([^"']+)["']/g)) {
    const spec = m[1]!;
    const ui = spec.match(/^@\/components\/ui\/([^/]+)/);
    const lib = spec.match(/^@\/lib\/([^/]+)/);
    if (ui) {
      if (ui[1] !== self) regDeps.add(ui[1]!);
    } else if (lib) {
      regDeps.add(lib[1]!);
    } else if (!spec.startsWith(".") && !spec.startsWith("@/")) {
      const p = pkgName(spec);
      if (!IMPLICIT.has(p)) deps.add(p);
    }
  }
}

// Docs metadata gives every component a human title/description/category.
const meta = new Map<string, { title: string; zh: string; description: string; category: string }>();
for (const dir of await readdir(DEMOS)) {
  const f = join(DEMOS, dir, "meta.ts");
  if (!(await Bun.file(f).exists())) continue;
  const m = (await import(f)).default;
  for (const name of m.registry ?? [dir]) {
    if (!meta.has(name)) meta.set(name, m);
  }
}

const items: Item[] = [];

// lib items: one per file in registry/lib/.
for (const file of (await readdir(LIB)).filter((f) => f.endsWith(".ts")).sort()) {
  const name = basename(file, ".ts");
  const content = await Bun.file(join(LIB, file)).text();
  const deps = new Set<string>();
  const regDeps = new Set<string>();
  scan(content, name, deps, regDeps);
  items.push({
    name,
    type: "lib",
    title: name,
    dependencies: [...deps].sort().map(pin),
    registryDependencies: [...regDeps].filter((d) => d !== name),
    files: [{ path: file, target: "lib", content }],
  });
}

// ui items: one per directory in registry/ui/.
for (const name of (await readdir(UI)).sort()) {
  const dir = join(UI, name);
  const files = (await readdir(dir)).filter((f) => /\.(vue|ts)$/.test(f)).sort();
  if (!files.length) continue;

  const deps = new Set<string>();
  const regDeps = new Set<string>();
  const entries: FileEntry[] = [];
  for (const file of files) {
    const content = await Bun.file(join(dir, file)).text();
    scan(content, name, deps, regDeps);
    entries.push({ path: `${name}/${file}`, target: "ui", content });
  }

  const m = meta.get(name);
  items.push({
    name,
    type: "ui",
    title: m ? `${m.title} ${m.zh}` : name,
    description: m?.description,
    category: m?.category,
    dependencies: [...deps].sort().map(pin),
    registryDependencies: [...regDeps].sort(),
    files: entries,
  });
}

// The theme: the generated stylesheet, and the imports that must precede it.
items.unshift({
  name: "paperlamp",
  type: "style",
  title: "纸灯 / Paperlamp 主题",
  description: "亮暗两套 CSS 变量、霞鹜文楷 + Fira Code、排版工具类与基础样式。由 DESIGN.md 生成。",
  dependencies: ["tw-animate-css", "lxgw-wenkai-screen-webfont", "@fontsource/fira-code", "lucide-vue-next"].map(pin),
  registryDependencies: ["utils"],
  cssImports: [
    "tailwindcss",
    "tw-animate-css",
    "lxgw-wenkai-screen-webfont/lxgwwenkaiscreen.css",
    "@fontsource/fira-code/400.css",
    "@fontsource/fira-code/500.css",
    "@fontsource/fira-code/700.css",
  ],
  files: [
    { path: "paperlamp.css", target: "css", content: await Bun.file(join(ROOT, "registry/styles/paperlamp.css")).text() },
  ],
});

const known = new Set(items.map((i) => i.name));
for (const i of items) {
  for (const d of i.registryDependencies) {
    if (!known.has(d)) throw new Error(`${i.name} depends on "${d}", which is not a registry item`);
  }
}

// Rewrite files in place and delete only stale ones: removing the whole directory makes a
// running Vite dev server lose track of public files and fall back to index.html.
await mkdir(OUT, { recursive: true });
const fresh = new Set([...items.map((i) => `${i.name}.json`), "index.json"]);
for (const f of await readdir(OUT)) if (!fresh.has(f)) await rm(join(OUT, f));
for (const item of items) await Bun.write(join(OUT, `${item.name}.json`), JSON.stringify(item, null, 2) + "\n");
await Bun.write(
  join(OUT, "index.json"),
  JSON.stringify(
    {
      name: "paperlamp",
      items: items.map(({ files: _files, cssImports: _css, ...rest }) => rest),
    },
    null,
    2,
  ) + "\n",
);

const missingMeta = items.filter((i) => i.type === "ui" && !meta.has(i.name)).map((i) => i.name);
console.log(`registry: ${items.length} items → www/public/r`);
if (missingMeta.length) console.warn(`  ⚠ no docs page for: ${missingMeta.join(", ")}`);
