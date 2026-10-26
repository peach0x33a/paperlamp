import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Radio Group",
  zh: "单选框组",
  description: "在互斥选项中选择一个。选项较少、需要一眼看全时使用。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Disabled", title: "禁用选项" },
  ],
  notes: [
    "选项超过五个时，考虑改用 Select。",
    "键盘方向键在选项间移动，Tab 键离开整组。",
  ],
});
