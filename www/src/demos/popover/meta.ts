import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Popover",
  zh: "气泡卡片",
  description: "点击触发器后在旁边展开的小面板，用于说明或表单。面板为纸色卡片，带细边框与 shadow-lg，不遮挡整个页面。",
  category: "data",
  examples: [
    { name: "Default", title: "基础用法", description: "评分说明：解释星级含义，不做任何选择。" },
    { name: "Form", title: "表单", description: "在面板里直接修改一个小设置，确认后关闭。" },
  ],
  notes: [
    "点击外部或按 Esc 关闭，不使用遮罩。",
    "面板使用 rounded-md 与 shadow-lg，与 DropdownMenu 处于同一层级。",
  ],
});
