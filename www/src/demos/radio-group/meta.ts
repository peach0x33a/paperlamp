import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "RadioGroup",
  zh: "单选框组",
  description: "在一组互斥选项中选择一个。选中项为墨色圆点，适合选项少且需要一眼看全的场景。",
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
