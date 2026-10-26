import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Slider",
  zh: "滑块",
  description: "在连续或分段的数值范围内选择。轨道为边框色，已选区间为墨色；传入多个滑块值即为区间选择。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Range", title: "区间", description: "给 v-model 两个值即显示两个滑块，中间是选中的区间。" },
  ],
  notes: [
    "滑块支持方向键与 Home / End，Page Up / Page Down 按较大步长移动。",
    "焦点使用 2px 墨色外轮廓。",
  ],
});
