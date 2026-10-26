import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Range Calendar",
  zh: "范围日历",
  description: "选择一段连续日期。起止日期使用墨色，中间日期使用中性底纹。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法", description: "先点开始日期，再点结束日期。" },
  ],
  notes: [
    "起止日期使用 bg-primary，区间内日期使用 bg-accent。",
    "选择时可用方向键移动焦点，回车或空格确定日期。",
  ],
});
