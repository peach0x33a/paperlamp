import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Tags Input",
  zh: "标签输入",
  description: "输入后按回车或逗号添加标签，点击 × 或按 Backspace 移除。",
  category: "form",
  examples: [
    { name: "Default", title: "给工具加标签", description: "默认已有两个标签，可继续添加或移除。" },
    { name: "Max", title: "数量上限", description: "max 限制最多三个标签，达到上限后不再接受新输入。" },
  ],
  notes: [
    "外壳焦点为 border-foreground，不加光晕；标签的删除按钮有 focus-visible 描边。",
    "标签使用 font-mono。与 TagChip 不同：这里用于编辑输入，TagChip 用于切换筛选。",
  ],
});
