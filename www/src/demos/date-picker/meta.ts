import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Date Picker",
  zh: "日期选择",
  description: "由 Popover、Button 和 Calendar 组合而成。触发器显示所选日期，浮层内为月历。",
  category: "form",
  registry: ["calendar", "popover", "button"],
  examples: [
    { name: "Default", title: "单个日期", description: "周末不可选。" },
    { name: "Range", title: "时间范围" },
  ],
  notes: [
    "没有单独的 DatePicker 组件，用 Popover 与 Calendar 组合即可。",
  ],
});
