import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Dialog",
  zh: "对话框",
  description: "需要用户完成一件事时使用的模态面板。遮罩为纸色并带轻微模糊，面板是 rounded-sm 卡片，只做淡入淡出。",
  category: "feedback",
  examples: [
    { name: "Default", title: "基础用法", description: "分享工具：只读链接加复制按钮。" },
    { name: "Form", title: "表单", description: "编辑简介：标题、输入框与底部的两个操作。" },
  ],
  notes: [
    "遮罩使用 bg-overlay 与 backdrop-blur-sm，不使用黑色遮罩。",
    "面板使用 rounded-sm 与 shadow-2xl，入场和退场都是 fade，没有缩放。",
    "右上角的关闭按钮是 DialogClose，并带有 aria-label。",
  ],
});
