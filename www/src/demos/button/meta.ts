import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Button",
  zh: "按钮",
  description: "触发一次操作。墨色填充只留给每个视图里唯一的主操作；其余操作用描边、幽灵或方括号文字按钮。",
  category: "general",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Variants", title: "变体", description: "default / secondary / outline / ghost / destructive / link。" },
    { name: "Bracket", title: "方括号文字按钮", description: "纸灯的签名式样：等宽、弱化，hover 转墨色并加下划线。indigo 版用于 [评分]。" },
    { name: "Sizes", title: "尺寸" },
    { name: "WithIcon", title: "图标与加载态" },
    { name: "AsChild", title: "作为链接", description: "使用 as-child 把样式交给子元素，例如 RouterLink 或 <a>。" },
  ],
  notes: [
    "按钮动效只用透明度与颜色，不使用 scale；禁用态降到 50% 不透明度。",
    "destructive 只把文字染红，不使用红色填充 —— 红色全站只作为文字出现。",
    "键盘焦点使用 2px 墨色外轮廓，而非光晕。",
  ],
});
