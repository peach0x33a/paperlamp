import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Toggle Group",
  zh: "切换按钮组",
  description: "一组切换按钮。单选用于视图切换，多选用于同时启用的筛选条件。variant 与 size 由组统一设置，子项自动继承。",
  category: "form",
  examples: [
    { name: "Default", title: "单选" },
    { name: "Multiple", title: "多选与变体", description: "type=\"multiple\" 时子项可同时按下；组上的 variant 会传给每一项。" },
  ],
  notes: [
    "需要始终保留一个选中项时，设置 type=\"single\"，并通过 v-model 提供默认值。",
    "子项共享 Toggle 的 cva 变体，无需逐项设置。",
  ],
});
