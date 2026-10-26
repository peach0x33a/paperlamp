import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Sidebar",
  zh: "侧边栏",
  description: "可折叠的导航侧栏，支持整体收起、图标模式和移动端抽屉。状态保存在 cookie 中，Ctrl/⌘+B 切换。",
  category: "layout",
  examples: [
    { name: "Default", title: "管理后台", description: "分组导航、计数徽标和底部用户信息。窄屏时收进抽屉。" },
    { name: "Icon", title: "图标折叠", description: "collapsible=\"icon\"：收起后只剩图标，悬停显示名称。" },
  ],
  notes: [
    "侧栏底色为 bg-card，边界为 border，悬停和选中使用 bg-accent。",
    "文档预览中使用 contained，侧栏相对预览框定位。",
    "宽度 16rem，图标模式 3rem；移动端（小于 768px）以 Sheet 从左侧滑出。",
  ],
});
