import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Rating",
  zh: "评分",
  description: "RatingStars 只读展示五颗星金色星星（或排行榜圆点）并永远附上等宽分数；RatingInput 是单选语义的评分选择器。",
  category: "signature",
  examples: [
    { name: "Default", title: "评分展示" },
    { name: "Dots", title: "排行榜圆点", description: "variant=\"dot\"：排行榜里用五个圆点加平均分。" },
    { name: "Input", title: "评分选择", description: "方向键切换；选中放大 1.1，悬停放大 1.25 —— 全站仅此处允许 scale。" },
  ],
  notes: [
    "星金色在白底上只有 1.53:1，不能单独承载信息，所以分数数字总是跟在旁边。",
    "评分档位（拉 / NPC / 人上人 / 顶级 / 夯）是产品数据，通过 labels 传入，不是设计令牌。",
  ],
});
