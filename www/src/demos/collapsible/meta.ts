import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Collapsible",
  zh: "可折叠区域",
  description: "一个触发器控制一段内容的展开与收起，没有外观约束，外层由你决定样式。",
  category: "layout",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Controlled", title: "受控", description: "v-model:open 从外部控制展开状态。" },
  ],
  notes: [
    "内容展开与收起时高度平滑过渡，不做缩放或弹跳。",
    "如果需要带左边条的面板外观，请使用 NoticePanel。",
  ],
});
