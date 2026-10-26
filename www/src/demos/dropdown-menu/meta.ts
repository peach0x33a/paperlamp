import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Dropdown Menu",
  zh: "下拉菜单",
  description: "从按钮展开的操作列表，常用于卡片的更多操作按钮。菜单项用中性底纹高亮，危险操作只用红色文字并放在最后。",
  category: "navigation",
  examples: [
    { name: "Default", title: "基础用法", description: "卡片的更多菜单：分享、复制、隐藏，最后是举报。" },
    { name: "Checkbox", title: "复选与单选", description: "CheckboxItem 与 RadioItem 用于切换显示方式。" },
  ],
  notes: [
    "危险操作（举报）放在分隔线之后，只用 destructive 文字，不做红色填充。",
    "菜单使用 rounded-md 与 shadow-lg，与 Popover 同层。",
  ],
});
