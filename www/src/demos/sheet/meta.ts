import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Sheet",
  zh: "侧边面板",
  description: "从屏幕边缘滑出的面板，用于放置筛选或设置。滑动时长 300ms。",
  category: "feedback",
  examples: [
    { name: "Default", title: "基础用法", description: "从右侧滑出的筛选面板，底部是重置与应用。" },
    { name: "Bottom", title: "底部面板", description: "side=\"bottom\" 用于较短的内容，例如更新日志。" },
  ],
  notes: [
    "面板的滑入滑出为位移动画，遮罩只做淡入淡出。",
    "关闭按钮位于右上角，并带有 aria-label。",
  ],
});
