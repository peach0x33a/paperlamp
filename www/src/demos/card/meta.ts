import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Card",
  zh: "卡片",
  description: "通用容器，rounded-md、1px 边框、卡面底色。组件源码位于 registry/ui/card，本页只展示组合方式。",
  category: "data",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "WithFooter", title: "带页脚", description: "CardFooter 默认带 pt-6 的顶部间距；variant=\"dashed\" 为虚线页脚。" },
  ],
  notes: [
    "卡片默认扁平，只靠边框与底色区分层级。阴影仅在 ToolCard 的 hover 状态出现。",
  ],
});
