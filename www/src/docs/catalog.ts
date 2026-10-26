import type { Component } from "vue";
import type { CategoryId, ComponentMeta } from "./types";
import { CATEGORIES } from "./types";

// Every directory under www/src/demos/ with a meta.ts becomes a docs page — no
// central list to edit. Demos load lazily; sources load as raw strings on demand.
const metas = import.meta.glob<{ default: ComponentMeta }>("../demos/*/meta.ts", { eager: true });
const demoModules = import.meta.glob<{ default: Component }>("../demos/*/*.vue");
const demoSources = import.meta.glob<string>("../demos/*/*.vue", { query: "?raw", import: "default" });
const uiSources = import.meta.glob<string>("../../../registry/ui/*/*.{vue,ts}", {
  query: "?raw",
  import: "default",
});

export interface DocEntry extends ComponentMeta {
  slug: string;
}

const slugOf = (path: string) => path.split("/").at(-2)!;

export const entries: DocEntry[] = Object.entries(metas)
  .map(([path, mod]) => ({ ...mod.default, slug: slugOf(path) }))
  .sort((a, b) => a.title.localeCompare(b.title));

export const bySlug = new Map(entries.map((e) => [e.slug, e]));

export const grouped = CATEGORIES.map((c) => ({
  ...c,
  items: entries.filter((e) => e.category === (c.id as CategoryId)),
})).filter((g) => g.items.length);

export function loadDemo(slug: string, name: string) {
  const loader = demoModules[`../demos/${slug}/${name}.vue`];
  if (!loader) throw new Error(`Missing demo ${slug}/${name}.vue`);
  return loader().then((m) => m.default);
}

export function loadDemoSource(slug: string, name: string) {
  return demoSources[`../demos/${slug}/${name}.vue`]?.() ?? Promise.resolve("");
}

/** All source files of one registry/ui/<item> directory: [{ file, code }]. */
export async function loadRegistrySources(item: string) {
  const prefix = `../../../registry/ui/${item}/`;
  const files = Object.keys(uiSources)
    .filter((p) => p.startsWith(prefix))
    .sort((a, b) => (a.endsWith("index.ts") ? 1 : b.endsWith("index.ts") ? -1 : a.localeCompare(b)));
  return Promise.all(files.map(async (p) => ({ file: p.slice(prefix.length), code: await uiSources[p]!() })));
}
