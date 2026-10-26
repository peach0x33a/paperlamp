import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Aspect Ratio",
  zh: "宽高比",
  description: "把内容锁定在固定宽高比内，用于截图和预览画面。",
  category: "layout",
  examples: [
    { name: "Default", title: "基础用法", description: "16:9 的截图占位。" },
    { name: "Square", title: "方形", description: "ratio=\"1\"，用于头像和图标。" },
  ],
  notes: [
    "宽高比容器本身不加边框，圆角与裁切由外层的 rounded-md 与 overflow-hidden 负责。",
  ],
});
