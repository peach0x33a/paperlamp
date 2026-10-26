import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Switch",
  zh: "开关",
  description: "立即生效的二元设置。开启时轨道变为墨色。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Disabled", title: "禁用" },
  ],
  notes: [
    "开关的效果应立即生效；需要确认后才生效的设置，请用 Checkbox 加保存按钮。",
    "轨道移动只用颜色与位移过渡，无弹性动画。",
  ],
});
