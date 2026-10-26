import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Tag Chip",
  zh: "标签胶囊",
  description: "等宽药丸标签，用于标签筛选。hover、键盘焦点与选中状态均为墨底纸字，没有中间态。",
  category: "data",
  examples: [
    { name: "Default", title: "基础用法", description: "单个 TagChip 是一个带 aria-pressed 的 <button>。" },
    { name: "Single", title: "单选筛选", description: "TagChipGroup type=\"single\"，方向键在标签间移动。" },
    { name: "Multiple", title: "多选筛选" },
  ],
  notes: [
    "标签本身就是 <button>，Tab 键聚焦时与 hover 一样反转为墨底纸字。",
    "工具卡内的小标签请使用 ToolCardTag。",
  ],
});
