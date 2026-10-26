import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Accordion",
  zh: "手风琴",
  description: "一组可折叠的问答或条目，条目之间用 1px 细线分隔。箭头 16px，展开时旋转 180 度。",
  category: "layout",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Multiple", title: "多项展开", description: "type=\"multiple\" 允许同时展开多项。" },
    { name: "FAQ", title: "常见问题", description: "工具页脚下的 FAQ 用法。" },
  ],
  notes: [
    "展开与收起时高度平滑过渡，箭头同步旋转 180°。",
    "触发器的焦点使用 2px 墨色外轮廓。",
  ],
});
