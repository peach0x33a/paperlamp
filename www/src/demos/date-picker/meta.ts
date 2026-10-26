import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Date Picker",
  zh: "日期选择",
  description: "由 Popover、Button 与 Calendar 组合而成的日期选择器。触发器显示所选日期，浮层里是一张月历。",
  category: "form",
  registry: ["calendar", "popover", "button"],
  examples: [
    { name: "Default", title: "单个日期", description: "选择上架日期。周末不上新。" },
    { name: "Range", title: "时间范围", description: "选择一段时间范围。" },
  ],
  notes: [
    "没有单独的 date-picker 组件，直接把 Popover 与 Calendar 组合起来即可。",
  ],
});
