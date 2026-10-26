import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Accordion",
  zh: "手风琴",
  description: "一组可折叠的问答或条目，条目之间用 1px 细线分隔。箭头 16px，展开时旋转 180 度。",
  category: "data",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Multiple", title: "多项展开", description: "type=\"multiple\" 允许同时展开多项。" },
    { name: "FAQ", title: "常见问题", description: "放在卡片容器中的 FAQ。" },
  ],
  notes: [
    "展开与收起时高度平滑过渡，箭头同步旋转 180 度。",
    "触发器聚焦时使用 2px 墨色外轮廓。",
  ],
});
