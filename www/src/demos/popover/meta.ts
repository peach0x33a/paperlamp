import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Popover",
  zh: "弹出框",
  description: "点击触发器后在旁边展开的一小块说明或表单。面板是纸色卡片，带细边框与 shadow-lg，不挡住整个页面。",
  category: "overlay",
  examples: [
    { name: "Default", title: "基础用法", description: "评分说明：解释星级含义，不做任何选择。" },
    { name: "Form", title: "表单", description: "在面板里直接修改一个小设置，确认后关闭。" },
  ],
  notes: [
    "点击外部或按 Esc 会关闭弹出框，不使用遮罩。",
    "面板 rounded-md 与 shadow-lg，与 DropdownMenu 保持同一层级。",
  ],
});
