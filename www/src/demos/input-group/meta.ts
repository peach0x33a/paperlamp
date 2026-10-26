import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Input Group",
  zh: "输入组",
  description: "将图标、前缀、按钮与输入框放入同一边框。内部控件无边框，焦点在组内时整组边框加深。",
  category: "form",
  examples: [
    { name: "Default", title: "搜索", description: "左侧为搜索图标，右侧为快捷键提示。" },
    { name: "Prefix", title: "前缀与按钮", description: "https:// 作为只读前缀，右侧为复制按钮。" },
    { name: "Textarea", title: "多行与底部工具栏", description: "底部插槽放字数统计与发送按钮。" },
  ],
  notes: [
    "整组是输入框的外壳，焦点在组内任何控件时边框变为 border-foreground，不加光晕。",
    "点击前缀或附加区域的空白，焦点会移到输入控件。",
  ],
});
