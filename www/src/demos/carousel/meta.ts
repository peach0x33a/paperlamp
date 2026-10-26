import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Carousel",
  zh: "轮播",
  description: "一次展示一块内容，可左右（或上下）翻动。基于 embla-carousel，支持拖动、方向键与按钮翻页。",
  category: "data",
  examples: [
    { name: "Default", title: "基础用法", description: "每张幻灯片是一个卡片，包含名称与一句说明，不使用外部图片。" },
    { name: "Multiple", title: "多张同屏", description: "basis-1/3 让每次同时看到三张卡片。" },
    { name: "Vertical", title: "纵向", description: "orientation=\"vertical\"，上下翻动，适合较长的更新记录。" },
    { name: "Api", title: "翻页计数", description: "通过 useCarousel 读取当前位置，显示当前页与总页数。" },
  ],
  notes: [
    "到达两端时按钮禁用，不循环。",
    "聚焦轮播区域后可用方向键翻页；在输入框中输入时方向键不翻页。",
    "翻页计数读取自 embla 的 selectedScrollSnap 与 scrollSnapList。",
  ],
});
