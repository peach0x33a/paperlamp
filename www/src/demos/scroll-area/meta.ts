import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "ScrollArea",
  zh: "滚动区域",
  description: "自定义滚动条：8px 宽，拇指使用边框色，悬停时转为 muted-foreground。与 DESIGN.md 中的滚动条规范一致。",
  category: "layout",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Horizontal", title: "横向滚动", description: "orientation=\"horizontal\" 的 ScrollBar 放在同一 ScrollArea 中。" },
  ],
  notes: [
    "滚动区域需要给定高度或最大高度，否则不会出现滚动条。",
  ],
});
