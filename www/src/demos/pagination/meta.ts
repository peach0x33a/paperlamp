import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Pagination",
  zh: "分页",
  description: "在长列表之间翻页。当前页为描边加墨色边框，其余页码为幽灵按钮，数字使用等宽字体。",
  category: "navigation",
  examples: [
    { name: "Default", title: "基础用法", description: "36 条、每页 6 条，页码使用 tabular-nums 对齐。" },
    { name: "Edges", title: "首尾与省略", description: "showEdges 显示首页与末页，中间用省略号折叠。" },
  ],
  notes: [
    "当前页使用 aria-current=\"page\" 与墨色边框，不用墨色填充。",
    "页码按钮复用 Button 的 ghost 与 outline 变体。",
  ],
});
