import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Navigation Menu",
  zh: "导航菜单",
  description: "站点顶部导航，悬停或点击打开一组链接。面板为 bg-popover 的 rounded-md 浮层，只做淡入淡出。",
  category: "navigation",
  examples: [
    { name: "Default", title: "站点导航", description: "工具、标签、排行榜、关于。「工具」展开一组带说明的链接。" },
  ],
  notes: [
    "触发器与 navigationMenuTriggerStyle 使用同一套样式，选中时为 bg-accent。",
    "面板使用 bg-popover、rounded-md、shadow-lg，与下拉菜单同层。",
  ],
});
