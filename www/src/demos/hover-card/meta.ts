import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Hover Card",
  zh: "悬浮卡片",
  description: "鼠标移到用户名上时预览其简介。它是只读预览，不放操作；需要操作时请使用「气泡卡片」。",
  category: "data",
  examples: [
    { name: "Default", title: "基础用法", description: "作者的用户名后面悬浮出简介与他做过的工具。" },
  ],
  notes: [
    "悬浮卡片延迟出现，移开后收起。它不适合放按钮。",
    "键盘聚焦在触发器上时同样会打开。",
  ],
});
