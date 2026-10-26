import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Badge",
  zh: "徽章",
  description: "标题旁的小标签，用于维护状态、精选、隐藏等元数据。等宽 label-xs 字体，4px 圆角。",
  category: "data",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Status", title: "状态徽章", description: "维护中、精选、已隐藏、内容警告四种状态，对应工具卡标题行里的状态徽章。" },
    { name: "AsLink", title: "作为链接", description: "as-child 交给 <a>，可点击的徽章才有 hover。" },
  ],
  notes: [
    "维护中徽章的文字使用墨色 80%。灰字在 20% 底纹上只有 3.76:1，达不到 4.5:1。",
    "精选徽章带 shadow-sm，并配 12px 的 Sparkles 图标与琥珀描边。",
    "没有红色徽章，红色只用于文字。",
  ],
});
