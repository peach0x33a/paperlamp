import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Skeleton",
  zh: "骨架屏",
  description: "内容加载前的占位块，使用边框色 50% 的底纹缓慢呼吸。",
  category: "feedback",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Card", title: "工具卡占位", description: "与工具卡同样的结构，避免加载完成时版面跳动。" },
  ],
});
