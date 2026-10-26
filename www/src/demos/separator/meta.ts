import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Separator",
  zh: "分隔线",
  description: "1px 的实心 border 色分隔线，水平或垂直。柔和的边界用虚线，分隔线本身保持实线。",
  category: "layout",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Vertical", title: "垂直", description: "放在 flex 行内，高度跟随容器。" },
    { name: "WithLabel", title: "带文字", description: "中间插入一段 label-sm 文字，两侧仍是同一根 1px 线。" },
  ],
  notes: [
    "分隔线只用 bg-border 填色，不加阴影，不做粗线。",
  ],
});
