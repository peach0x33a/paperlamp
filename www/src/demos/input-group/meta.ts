import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Input Group",
  zh: "输入组",
  description: "把图标、前缀、按钮与输入框装进同一张纸。外壳即输入框的边框，内部控件无边框，焦点时整组描边变深。",
  category: "form",
  examples: [
    { name: "Default", title: "搜索", description: "左侧放搜索图标，右侧用快捷键提示。" },
    { name: "Prefix", title: "前缀与按钮", description: "https:// 前缀作为只读文字，右侧一个复制按钮。" },
    { name: "Textarea", title: "多行与底部工具栏", description: "块级底部插槽放字数统计与发表按钮。" },
  ],
  notes: [
    "整组是输入框的外壳，焦点在组内任何控件时边框变为 border-foreground，不加光晕。",
    "点击前缀或附加区域的空白会把焦点交给输入控件。",
  ],
});
