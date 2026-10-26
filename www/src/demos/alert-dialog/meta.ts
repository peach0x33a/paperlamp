import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "AlertDialog",
  zh: "确认对话框",
  description: "只用来确认一个不可逆或影响很大的操作。面板里要写清楚后果，只给两个按钮，没有关闭的 X。",
  category: "overlay",
  examples: [
    { name: "Default", title: "基础用法", description: "删除评论：标题是问题，正文说明后果。" },
    { name: "Confirm", title: "普通确认", description: "隐藏工具会让它从列表里消失，确认按钮使用主操作样式。" },
  ],
  notes: [
    "删除按钮只把文字染成 destructive，不使用红色填充。",
    "点击遮罩不会关闭确认对话框，只能通过两个按钮之一结束。",
  ],
});
