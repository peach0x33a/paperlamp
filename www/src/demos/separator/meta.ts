import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Separator",
  zh: "分隔线",
  description: "1px 实线分隔线，支持水平和垂直方向。",
  category: "layout",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Vertical", title: "垂直", description: "放在 flex 行内，高度跟随容器。" },
    { name: "WithLabel", title: "带文字", description: "中间插入 label-sm 文字，两侧仍是同一根 1px 线。" },
  ],
  notes: [
    "只用 bg-border 填色，不加阴影，不做粗线。",
  ],
});
