import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Menubar",
  zh: "菜单栏",
  description: "放在工具页顶部的一排菜单：文件、视图、工具。菜单面板与下拉菜单一致，只是横向排列。",
  category: "navigation",
  examples: [
    { name: "Default", title: "工具页工具栏", description: "文件、视图、工具三组菜单，视图里包含复选项与单选项。" },
  ],
  notes: [
    "菜单面板与 DropdownMenu 使用相同的样式：bg-popover、rounded-md、shadow-lg，选中项为 bg-accent 底纹。",
    "危险操作只使用 destructive 文字，不做红色填充。",
  ],
});
