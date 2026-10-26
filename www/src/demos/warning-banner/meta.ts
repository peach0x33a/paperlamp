import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "WarningBanner",
  zh: "内容警告",
  description: "安全提示横条：橙色底纹 + 4px 左边条、16px 橙色图标、warning-text 字重 500。六种警告共用同一套样式。",
  category: "signature",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Stacked", title: "多条叠放", description: "一个工具可能同时触发几种警告，直接竖排即可。" },
    { name: "Dismissible", title: "可关闭", description: "关闭按钮跟随文字颜色，暗色模式下同样清晰。" },
  ],
  notes: [
    "横条是硬边（无圆角），图标的 3:1 只用于非文字；正文用 warning-text 达到 6.9:1。",
  ],
});
