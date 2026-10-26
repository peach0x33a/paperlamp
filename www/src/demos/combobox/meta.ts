import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Combobox",
  zh: "组合框",
  description: "可搜索的下拉选择。输入即过滤，无匹配项时显示空状态。",
  category: "form",
  examples: [
    { name: "Default", title: "单选搜索", description: "输入文字过滤选项，无匹配时显示 ComboboxEmpty。" },
    { name: "Multiple", title: "多选标签", description: "multiple 模式下选中项保留在列表中，并以勾号标记。" },
  ],
  notes: [
    "ComboboxAnchor 是外框，包住 ComboboxInput 与 ComboboxTrigger。焦点在输入框时，外框显示墨色边框。",
    "空状态文字写明具体情况，例如「没有找到这个标签」，不写「无数据」。",
  ],
});
