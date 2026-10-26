import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "AspectRatio",
  zh: "宽高比",
  description: "把内容锁定在固定宽高比里，常用于工具截图和预览画面。",
  category: "layout",
  examples: [
    { name: "Default", title: "基础用法", description: "16:9 的工具截图位。" },
    { name: "Square", title: "方形", description: "ratio=\"1\"，适合头像与图标。" },
  ],
  notes: [
    "宽高比容器本身不加边框，外层 rounded-md 与 overflow-hidden 负责裁切。",
  ],
});
