import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Alert",
  zh: "警告提示",
  description: "页面内的静态提示块。indigo 与 warning 变体沿用纸灯的 4px 左边条与底纹样式。",
  category: "feedback",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Indigo", title: "说明信息", description: "一般说明与 AI 生成内容的提示。" },
    { name: "Warning", title: "安全提示", description: "安全相关：橙色图标，正文 warning-text 字重 500。" },
    { name: "Destructive", title: "错误", description: "红色只用于文字，容器仍是普通表面。" },
  ],
  notes: [
    "带边条的变体只保留右侧圆角，左侧边条为直边。",
    "需要可折叠的长内容请使用「通知面板」；成组的安全提示请使用 WarningBanner。",
  ],
});
