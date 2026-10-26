import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Number Field",
  zh: "数字输入",
  description: "带加减按钮的数字输入。数字使用等宽数字，超出范围时步进按钮停用。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法", description: "每页显示数量，步长 10，范围 10 到 100。" },
    { name: "Generate", title: "生成数量", description: "范围 1 到 8，可直接输入数字。" },
  ],
  notes: [
    "输入框焦点为 border-foreground，不加光晕。",
    "步进按钮可点击，焦点使用 2px 墨色外轮廓。",
  ],
});
