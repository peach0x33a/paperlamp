import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Item",
  zh: "条目",
  description: "通用的列表条目：左侧媒体、中间标题与描述、右侧操作。可作为链接使用，也能组合成列表。",
  category: "general",
  examples: [
    { name: "Default", title: "通知列表", description: "ItemGroup 中用 ItemSeparator 分隔的几条更新通知。" },
    { name: "Outline", title: "链接条目", description: "outline 变体配合 as-child 渲染为链接，整行可点。" },
    { name: "Muted", title: "维护中", description: "muted 变体用于状态说明，搭配 Badge 标记。" },
  ],
  notes: [
    "variant 取 default / outline / muted，size 取 default / sm。",
    "ItemMedia 的 icon 与 image 变体分别用于图标与头像。",
  ],
});
