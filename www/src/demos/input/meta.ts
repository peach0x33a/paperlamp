import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Input",
  zh: "输入框",
  description: "单行文本输入。聚焦时边框变为墨色，不加光晕。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Invalid", title: "校验失败", description: "aria-invalid 时边框变为红色，错误文字显示在输入框下方。" },
    { name: "Disabled", title: "禁用" },
  ],
  notes: [
    "标签放在输入框上方，使用 Label 并通过 for 与 id 关联。",
    "聚焦只改变边框颜色，不使用 ring 或阴影。",
  ],
});
