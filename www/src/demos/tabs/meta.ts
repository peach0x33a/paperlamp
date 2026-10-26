import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Tabs",
  zh: "标签页",
  description: "在同一块区域里切换几组相关内容。标签条是一条浅底的槽，当前标签浮在纸色卡片上。",
  category: "navigation",
  examples: [
    { name: "Default", title: "基础用法", description: "工具详情页的简介、评论与更新日志。" },
    { name: "Disabled", title: "禁用标签", description: "没有内容的标签保持可见但不可选。" },
  ],
  notes: [
    "标签切换的内容会以 fade-up 入场，只在切换时播放一次。",
    "当前标签使用 bg-card 加 shadow-sm，而不是墨色填充，避免和主操作按钮争抢视觉。",
  ],
});
