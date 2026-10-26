import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Toggle",
  zh: "切换按钮",
  description: "可按下的单个按钮，用于收藏、置顶这类二元动作。按下时使用中性底纹与前景色，不使用墨色填充。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Variants", title: "变体", description: "default 无边框；outline 带边框。" },
    { name: "Sizes", title: "尺寸" },
  ],
  notes: [
    "只给带图标的切换按钮加 aria-label，说明它的动作。",
    "按下态是 bg-accent 的中性底纹，与 TagChip 的墨色选中态区分开。",
  ],
});
