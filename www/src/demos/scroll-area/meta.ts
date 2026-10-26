import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Scroll Area",
  zh: "滚动区域",
  description: "自定义滚动条：8px 宽，拇指为边框色，悬停时变为 muted-foreground。",
  category: "layout",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Horizontal", title: "横向滚动", description: "orientation=\"horizontal\" 的 ScrollBar 放在同一 ScrollArea 中。" },
  ],
  notes: [
    "滚动区域需要设置高度或最大高度，否则不会出现滚动条。",
  ],
});
