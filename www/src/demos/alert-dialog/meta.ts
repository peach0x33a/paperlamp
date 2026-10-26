import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Alert Dialog",
  zh: "确认对话框",
  description: "用于确认不可逆或影响较大的操作。面板内写清楚后果，只提供两个按钮，没有关闭图标。",
  category: "feedback",
  examples: [
    { name: "Default", title: "基础用法", description: "删除评论：标题为确认问题，正文说明后果。" },
    { name: "Confirm", title: "普通确认", description: "隐藏工具会让它从列表里消失，确认按钮使用主操作样式。" },
  ],
  notes: [
    "删除按钮只把文字染成 destructive，不使用红色填充。",
    "点击遮罩不会关闭，只能通过两个按钮之一结束。",
  ],
});
