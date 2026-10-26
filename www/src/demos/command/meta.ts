import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Command",
  zh: "命令面板",
  description: "可搜索的命令列表，输入即过滤。用在页面内的搜索面板，或通过快捷键唤起的对话框。",
  category: "navigation",
  examples: [
    { name: "Default", title: "基础用法", description: "页面内的搜索面板：工具、标签和命令分组列出，输入后即时过滤。" },
    { name: "Dialog", title: "对话框", description: "按钮或 Ctrl/⌘+K 打开的命令面板。" },
  ],
  notes: [
    "选中项使用 bg-accent 中性底纹，不使用 indigo。",
    "没有匹配项时，CommandEmpty 会显示说明文字。",
    "快捷键通过 Kbd 展示，标签使用等宽字体。",
  ],
});
