import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Carousel",
  zh: "轮播",
  description: "一次只展示一块内容、可以左右（或上下）翻动的容器。基于 embla-carousel，支持拖动、方向键与按钮翻页。",
  category: "layout",
  examples: [
    { name: "Default", title: "工具截图", description: "每一张是一个工具卡片：名称与一句说明，没有外部图片。" },
    { name: "Multiple", title: "多张同屏", description: "basis-1/3 让每次同时看到三张卡片。" },
    { name: "Vertical", title: "纵向", description: "orientation=\"vertical\"，上下翻动，适合较长的更新记录。" },
    { name: "Api", title: "翻页计数", description: "通过 useCarousel 读取当前位置，显示真实的第几张和总数。" },
  ],
  notes: [
    "按钮在两端会禁用，不会循环。",
    "聚焦轮播区域后可以用方向键翻页；在输入框里输入时方向键不会翻页。",
    "翻页计数来自 embla 的 selectedScrollSnap 与 scrollSnapList，不是估算。",
  ],
});
