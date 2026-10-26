import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Table",
  zh: "表格",
  description: "排行榜式数据表。外壳为 bg-card、rounded-md 与细边框，表头为纸色等宽字，行间用半透明细线分隔。",
  category: "data",
  examples: [
    { name: "Default", title: "基础用法", description: "工具排行榜：前三名用奖牌标记，评分用星级与分数，维护中的行降低到 60% 不透明度。" },
    { name: "Caption", title: "带说明与空状态", description: "caption 说明数据范围，TableEmpty 占满整行提示没有结果。" },
  ],
  notes: [
    "数字列使用等宽字体与 tabular-nums，保证位数对齐。",
    "维护中的行使用 opacity-60 降低强调。",
    "表头不做全大写或字距调整。",
  ],
});
