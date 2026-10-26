import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Textarea",
  zh: "多行输入",
  description: "多行文本输入，用于评论与说明。高度随内容增长，外观与 Input 一致。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Disabled", title: "禁用" },
  ],
  notes: [
    "评论框是页面上的一个凹陷槽，与背景形成对比，而不是纯白卡片。",
  ],
});
