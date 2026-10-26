import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Button",
  zh: "按钮",
  description: "触发一次操作。每个视图只放一个墨色主按钮，其他操作用描边、幽灵或方括号按钮。",
  category: "general",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Variants", title: "变体", description: "default / secondary / outline / ghost / destructive / link。" },
    { name: "Bracket", title: "方括号文字按钮", description: "等宽、弱化的文字按钮，hover 时转为墨色并加下划线。indigo 版用于评分。" },
    { name: "Sizes", title: "尺寸" },
    { name: "WithIcon", title: "图标与加载态" },
    { name: "AsChild", title: "作为链接", description: "as-child 把样式交给子元素，如 RouterLink 或 <a>。" },
  ],
  notes: [
    "按钮动效只用透明度与颜色，不用 scale。禁用态不透明度为 50%。",
    "destructive 只把文字染红，不做红色填充。",
    "键盘焦点为 2px 墨色外轮廓。",
  ],
});
