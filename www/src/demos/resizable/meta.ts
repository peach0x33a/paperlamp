import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Resizable",
  zh: "可调分栏",
  description: "基于 Splitter 的可拖拽分栏。拖动分隔线或使用方向键调整两侧比例。",
  category: "layout",
  examples: [
    { name: "Default", title: "代码与预览", description: "左侧代码，右侧预览，中间带抓手。" },
    { name: "Vertical", title: "纵向分栏", description: "上下两栏，如说明与更新记录。" },
  ],
  notes: [
    "分隔线是 1px 的 border 色线，withHandle 会显示带边框的小圆角抓手。",
    "焦点使用 focus-visible 外框，键盘用方向键调整。",
  ],
});
