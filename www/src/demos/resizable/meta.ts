import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Resizable",
  zh: "可调分栏",
  description: "基于 Splitter 的可拖拽分栏。分隔线是一条边框色的细线，拖动或用方向键即可调整两侧比例。",
  category: "layout",
  examples: [
    { name: "Default", title: "代码与预览", description: "工具详情页的分栏：左侧代码，右侧预览，中间带抓手。" },
    { name: "Vertical", title: "纵向分栏", description: "上下两栏，适合说明文字与更新记录并排查看。" },
  ],
  notes: [
    "分隔线本身是 1px 的 border 色线，抓手（withHandle）是一个带边框的小圆角药丸。",
    "焦点用 focus-visible 外框表示，键盘可用方向键调整。",
  ],
});
