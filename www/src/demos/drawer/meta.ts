import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Drawer",
  zh: "抽屉",
  description: "移动端优先的底部面板，用于完成一个小动作，例如给工具评分。它基于 vaul-vue，拖拽关闭与滑入是这里唯一允许的位移动画。",
  category: "overlay",
  examples: [
    { name: "Default", title: "底部抽屉", description: "给「猫名字典」评分：五颗星加档位名称，提交或取消。" },
    { name: "Responsive", title: "响应式", description: "桌面端用对话框，移动端用抽屉，同一份表单。" },
  ],
  notes: [
    "抽屉的滑入滑出与拖拽跟随由 vaul-vue 完成，遮罩仍然只做淡入淡出。",
    "顶部的小横条是拖拽提示，只出现在底部抽屉上。",
    "方向支持 bottom、top、left、right，与 Sheet 的 side 保持一致。",
  ],
});
