import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Tooltip",
  zh: "文字提示",
  description: "为只有图标的按钮补充说明。提示为反色墨色小标签，只在悬停或聚焦时出现。",
  category: "data",
  examples: [
    { name: "Default", title: "基础用法", description: "图标按钮的说明文字，悬停后 300ms 出现。" },
    { name: "Sides", title: "位置", description: "side 可设为 top、right、bottom、left。" },
  ],
  notes: [
    "提示使用 bg-primary 与 text-primary-foreground 反色配色。",
    "图标按钮必须同时有 aria-label，提示只是视觉补充。",
  ],
});
