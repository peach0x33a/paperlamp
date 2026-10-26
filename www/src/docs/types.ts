export const CATEGORIES = [
  { id: "general", label: "通用" },
  { id: "form", label: "表单" },
  { id: "layout", label: "布局" },
  { id: "overlay", label: "浮层" },
  { id: "feedback", label: "反馈" },
  { id: "navigation", label: "导航" },
  { id: "data", label: "数据展示" },
  { id: "signature", label: "纸灯特色" },
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
