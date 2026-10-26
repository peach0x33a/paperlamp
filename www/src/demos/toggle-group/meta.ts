import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "ToggleGroup",
  zh: "切换按钮组",
  description: "一组切换按钮。单选用于视图切换，多选用于同时打开的筛选条件。变体与尺寸由组统一设置，子项自动继承。",
  category: "form",
  examples: [
    { name: "Default", title: "单选" },
    { name: "Multiple", title: "多选与变体", description: "type=\"multiple\" 时子项可同时按下；组上的 variant 会传给每一项。" },
  ],
  notes: [
    "单选组必须有一个选中项时，把 type 设为 single 并配合 v-model 使用默认值。",
    "子项共享 Toggle 的 cva 变体，无需逐项重复设置。",
  ],
});
