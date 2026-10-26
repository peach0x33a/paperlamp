import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Combobox",
  zh: "组合框",
  description: "可搜索的下拉选择。输入框与触发器共用一张纸，输入即过滤，找不到时给出明确的空状态。",
  category: "form",
  examples: [
    { name: "Default", title: "单选搜索", description: "输入文字过滤选项，没有匹配时显示 ComboboxEmpty。" },
    { name: "Multiple", title: "多选标签", description: "multiple 模式下选中项保留在列表中，并以勾号标记。" },
  ],
  notes: [
    "ComboboxAnchor 是外框，包住 ComboboxInput 与 ComboboxTrigger，焦点落在输入框时外框显示墨色边框。",
    "空状态文字要写明具体情况，不用「无数据」这类泛称。",
  ],
});
