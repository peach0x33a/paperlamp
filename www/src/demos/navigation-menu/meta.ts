import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "NavigationMenu",
  zh: "导航菜单",
  description: "站点顶部的导航，悬停或点击打开一组链接。面板是 bg-popover 的 rounded-md 浮层，只做淡入淡出。",
  category: "navigation",
  examples: [
    { name: "Default", title: "站点导航", description: "工具、标签、排行榜、关于。工具展开一组带一句话说明的链接。" },
  ],
  notes: [
    "触发器与 navigationMenuTriggerStyle 共用同一套样式，选中时使用 bg-accent 底纹。",
    "面板使用 bg-popover、rounded-md、shadow-lg，与下拉菜单同层。",
  ],
});
