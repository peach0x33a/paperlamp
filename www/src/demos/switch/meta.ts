import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Switch",
  zh: "开关",
  description: "立即生效的二元设置。开启时轨道变为墨色，适合「只看精选」「隐藏维护中的工具」这类偏好。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Disabled", title: "禁用" },
  ],
  notes: [
    "开关的效果应立即生效；需要确认后才生效的设置请用 Checkbox 加保存按钮。",
    "轨道移动只用颜色与位移过渡，无弹性动画。",
  ],
});
