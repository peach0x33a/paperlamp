import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Tags Input",
  zh: "标签输入",
  description: "输入后回车或逗号加入标签，点击 × 或按 Backspace 移除。外壳与输入框同一张纸，标签是等宽小药丸。",
  category: "form",
  examples: [
    { name: "Default", title: "给工具加标签", description: "默认已有两个标签，可继续添加或移除。" },
    { name: "Max", title: "数量上限", description: "max 限制最多三个标签，满了之后不再接受新输入。" },
  ],
  notes: [
    "外壳的焦点状态是 border-foreground，不加光晕；标签的删除按钮有 focus-visible 描边。",
    "标签使用 font-mono，与站内的 tag-chip 不同：这里是可编辑的输入，tag-chip 是可切换的筛选。",
  ],
});
