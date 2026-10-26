import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Empty",
  zh: "空状态",
  description: "没有内容时的占位。48px Ghost 图标使用 20% 透明度，上下留白 12 单位，入场时淡入上浮。",
  category: "data",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "WithAction", title: "带操作" },
    { name: "Icon", title: "图标底框", description: "EmptyMedia variant=\"icon\" 给图标加一块 4px 圆角的底。" },
  ],
});
