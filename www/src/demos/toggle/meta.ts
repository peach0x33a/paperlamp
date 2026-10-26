import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Toggle",
  zh: "切换按钮",
  description: "可按下的单个按钮，用于收藏、置顶等二元操作。按下时使用 bg-accent 底色。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Variants", title: "变体", description: "default 无边框，outline 带边框。" },
    { name: "Sizes", title: "尺寸" },
  ],
  notes: [
    "为图标按钮加 aria-label，说明其动作。",
    "按下态使用 bg-accent，与 TagChip 的墨色选中态区分。",
  ],
});
