import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Context Menu",
  zh: "右键菜单",
  description: "在卡片上右键时弹出的操作列表。与下拉菜单共享菜单项样式，危险操作同样放在最后。",
  category: "navigation",
  examples: [
    { name: "Default", title: "基础用法", description: "右键卡片：收藏、分享、复制链接，最后是举报。" },
  ],
  notes: [
    "右键菜单没有可见的触发按钮，卡片需要可聚焦，并提供下拉菜单作为键盘入口。",
    "危险操作使用 destructive 文字，不做红色填充。",
  ],
});
