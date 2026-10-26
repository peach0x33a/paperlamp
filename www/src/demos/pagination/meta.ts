import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Pagination",
  zh: "分页",
  description: "在长列表之间翻页。当前页使用描边加墨色边框，其余页码是幽灵按钮，数字使用等宽字体。",
  category: "navigation",
  examples: [
    { name: "Default", title: "基础用法", description: "工具列表按每页六个分页，页码数字使用 tabular-nums 对齐。" },
    { name: "Edges", title: "首尾与省略", description: "showEdges 显示首页与末页，并用省略号收起中间的页码。" },
  ],
  notes: [
    "当前页是 aria-current=\"page\"，并带墨色边框，不使用墨色填充。",
    "页码按钮复用 Button 的 ghost 与 outline 变体，不引入新的样式。",
  ],
});
