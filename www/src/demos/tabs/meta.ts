import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Tabs",
  zh: "标签页",
  description: "在同一区域切换几组相关内容。标签条为浅底槽，当前标签浮在纸色卡片上。",
  category: "navigation",
  examples: [
    { name: "Default", title: "基础用法", description: "工具详情页的简介、评论和更新日志。" },
    { name: "Disabled", title: "禁用标签", description: "没有内容的标签保持可见但不可选。" },
  ],
  notes: [
    "切换内容时以 fade-up 入场，只播放一次。",
    "当前标签使用 bg-card 与 shadow-sm，不用墨色填充，避免与主操作争抢注意力。",
  ],
});
