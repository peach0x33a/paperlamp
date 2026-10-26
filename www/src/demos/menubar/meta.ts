import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Menubar",
  zh: "菜单栏",
  description: "放在页面顶部的横向菜单栏。菜单面板与下拉菜单样式一致。",
  category: "navigation",
  examples: [
    { name: "Default", title: "工具栏", description: "文件、视图、工具三组菜单，视图中包含复选项和单选项。" },
  ],
  notes: [
    "菜单面板与 DropdownMenu 样式相同：bg-popover、rounded-md、shadow-lg，选中项为 bg-accent。",
    "危险操作只用 destructive 文字。",
  ],
});
