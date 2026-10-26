import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Sheet",
  zh: "侧边面板",
  description: "从屏幕边缘滑出的面板，用来放一组筛选或设置。它是纸灯里唯一会滑动的浮层，时长 300ms。",
  category: "overlay",
  examples: [
    { name: "Default", title: "基础用法", description: "从右侧滑出的筛选面板，底部是重置与应用。" },
    { name: "Bottom", title: "底部面板", description: "side=\"bottom\" 用于较短的内容，例如更新日志。" },
  ],
  notes: [
    "面板只有滑入滑出是位移动画，遮罩仍然只做淡入淡出。",
    "关闭按钮位于右上角，并带有 aria-label。",
  ],
});
