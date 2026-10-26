import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Sidebar",
  zh: "侧边栏",
  description: "可折叠的导航侧栏，支持整体收起、图标模式与移动端抽屉。状态记在 cookie 里，Ctrl/⌘+B 可随时切换。",
  category: "layout",
  examples: [
    { name: "Default", title: "管理后台", description: "分组导航、待审核计数与底部用户信息。窄屏时侧栏收进抽屉。" },
    { name: "Icon", title: "图标折叠", description: "collapsible=\"icon\"：收起后只剩图标，悬停显示名称提示。" },
  ],
  notes: [
    "侧栏底色是 bg-card，边界是 border，悬停与选中用 bg-accent，没有单独的 sidebar 色板。",
    "在文档预览里使用 contained：侧栏相对预览框定位，而不是铺满视口。",
    "宽度 16rem，图标模式 3rem；移动端（小于 768px）以 Sheet 从左侧滑出。",
  ],
});
