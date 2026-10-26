import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "HoverCard",
  zh: "悬浮卡片",
  description: "鼠标移到用户名上时预览这个人的简介。它是只读的预览，不承载操作；需要操作时请用 Popover。",
  category: "overlay",
  examples: [
    { name: "Default", title: "基础用法", description: "作者的用户名后面悬浮出简介与他做过的工具。" },
  ],
  notes: [
    "悬浮卡片延迟出现，移开后收起；它不适合放按钮。",
    "键盘聚焦在触发器上时同样会打开。",
  ],
});
