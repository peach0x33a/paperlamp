import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Card",
  zh: "卡片",
  description: "通用容器：rounded-md、1px 边框、纸面之上的卡面色。组件已在 registry/ui/card 中，这里只展示组合方式。",
  category: "layout",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "WithFooter", title: "带页脚", description: "CardFooter 默认带顶部 pt-6；variant=\"dashed\" 为工具卡式的虚线页脚。" },
  ],
  notes: [
    "卡片默认扁平，只靠边框与底色区分层级；阴影只在卡片 hover 时出现（见 ToolCard）。",
  ],
});
