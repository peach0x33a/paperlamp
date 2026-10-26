import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Badge",
  zh: "徽章",
  description: "标在标题旁的小标签：维护状态、精选、隐藏等元数据。等宽 label-xs、4px 圆角，比标签胶囊更安静。",
  category: "general",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Status", title: "状态徽章", description: "维护中 / 精选 / 隐藏 / 内容警告 —— 纸灯工具卡标题行里的四种状态。" },
    { name: "AsLink", title: "作为链接", description: "as-child 交给 <a>，可点击的徽章才有 hover。" },
  ],
  notes: [
    "维护中徽章的文字压深到墨色 80%：弱化灰字压在 20% 底纹上只有 3.76:1，达不到 4.5:1。",
    "精选徽章是唯一带阴影的徽章（shadow-sm），配 12px Sparkles 图标与琥珀描边。",
    "不提供红色徽章 —— 红色全站只作为文字出现。",
  ],
});
