import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Alert",
  zh: "提示",
  description: "页面内的静态提示块。indigo 与 warning 变体沿用纸灯的 4px 左边条 + 底纹配方。",
  category: "feedback",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Indigo", title: "Indigo", description: "说明性信息、AI 相关提示。" },
    { name: "Warning", title: "Warning", description: "安全相关：橙色图标，正文 warning-text 字重 500。" },
    { name: "Destructive", title: "Destructive", description: "红色只染文字，容器仍是普通表面。" },
  ],
  notes: [
    "带边条的变体只保留右侧圆角，边条一侧是硬边。",
    "需要可折叠的长内容请用 NoticePanel；成组的安全提示请用 WarningBanner。",
  ],
});
