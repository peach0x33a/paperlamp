import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Data Table",
  zh: "数据表格",
  description: "基于 TanStack Table 的工具列表，支持排序、筛选、选择与分页。组合 Table、Input、Button、Checkbox 与 DropdownMenu。",
  category: "data",
  registry: ["table", "button", "input", "dropdown-menu", "checkbox"],
  examples: [
    { name: "Default", title: "基础用法", description: "示例数据（虚构工具）。点击列头排序，输入框按工具名筛选，「列显示」控制列的可见性，每页 5 行。" },
  ],
  notes: [
    "排序、筛选、选择与分页的状态来自 TanStack Table 实例，组件只负责渲染。",
    "「全选」只作用于当前页；已选数量按筛选后的全部行计算。",
    "没有匹配结果时显示空状态行。",
  ],
});
