import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Collapsible",
  zh: "可折叠区域",
  description: "一个触发器控制一段内容的展开与收起。不带外观样式，外层样式由使用方决定。",
  category: "data",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Controlled", title: "受控", description: "v-model:open 从外部控制展开状态。" },
  ],
  notes: [
    "内容展开与收起时高度平滑过渡，没有缩放或弹跳。",
    "需要带左侧边条的面板时，使用 NoticePanel。",
  ],
});
