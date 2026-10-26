// Ant Design's taxonomy, which Element Plus, Arco and TDesign share: grouped by what a
// component does, not where it came from.
export const CATEGORIES = [
  { id: "general", label: "通用" },
  { id: "layout", label: "布局" },
  { id: "navigation", label: "导航" },
  { id: "form", label: "数据录入" },
  { id: "data", label: "数据展示" },
  { id: "feedback", label: "反馈" },
  { id: "other", label: "其他" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export interface ExampleMeta {
  /** File name of the demo SFC next to meta.ts, without `.vue` (e.g. "Default"). */
  name: string;
  /** Chinese heading shown above the preview. */
  title: string;
  description?: string;
}

export interface ComponentMeta {
  /** English component name, e.g. "Button". */
  title: string;
  /** Chinese name, e.g. "按钮". */
  zh: string;
  description: string;
  category: CategoryId;
  /** Registry items installed by this page; defaults to [directory name]. */
  registry?: string[];
  /** Ordered examples; the first one is the hero preview. */
  examples: ExampleMeta[];
  /** Optional usage notes (plain text paragraphs) rendered under 「设计说明」. */
  notes?: string[];
}

export const defineMeta = (m: ComponentMeta) => m;
