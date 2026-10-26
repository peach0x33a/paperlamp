import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Range Calendar",
  zh: "范围日历",
  description: "选一段连续的日期。起止日期用墨色，中间的日子铺一层中性底纹。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法", description: "筛选上架时间：先点开始日期，再点结束日期。" },
  ],
  notes: [
    "起止日期使用 bg-primary，区间内的日期使用 bg-accent 中性底纹。",
    "选择过程中可以用方向键移动焦点，回车或空格确定日期。",
  ],
});
