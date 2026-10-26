import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Rating",
  zh: "评分",
  description: "RatingStars 只读展示五颗星与等宽分数，也可显示排行榜圆点。RatingInput 是单选评分控件。",
  category: "form",
  examples: [
    { name: "Default", title: "评分展示" },
    { name: "Dots", title: "排行榜圆点", description: "variant=\"dot\"：排行榜里用五个圆点加平均分。" },
    { name: "Input", title: "评分选择", description: "方向键切换选项。选中项放大到 1.1，悬停放大到 1.25。" },
  ],
  notes: [
    "星星金色在白底上对比度仅 1.53:1，不能单独表示分数，需要始终附带数字。",
    "评分文案通过 labels 传入，不属于设计令牌。",
    "评分星星和警告确认按钮是仅有的两处允许 scale 动效的地方，其余按钮只改透明度。",
  ],
});
