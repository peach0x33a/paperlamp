import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Tooltip",
  zh: "提示",
  description: "给只有图标的按钮补一句说明。提示是反色的墨色小标签，只在悬停或聚焦时出现。",
  category: "overlay",
  examples: [
    { name: "Default", title: "基础用法", description: "图标按钮的说明文字，悬停后 300ms 出现。" },
    { name: "Sides", title: "位置", description: "side 可设为 top、right、bottom、left。" },
  ],
  notes: [
    "提示使用 bg-primary 与 text-primary-foreground，是纸灯里唯一的反色浮层。",
    "图标按钮必须同时有 aria-label；提示只是视觉补充。",
  ],
});
