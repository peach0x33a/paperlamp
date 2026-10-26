import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Chart",
  zh: "图表",
  description: "基于 Unovis 的图表组件。ChartContainer 把 config 转为 --color-<key> 变量，Tooltip 与 Legend 共享同一份配置。",
  category: "data",
  examples: [
    { name: "Default", title: "基础用法", description: "示例数据：每周新增工具数，按标签堆叠。悬停查看当周的分项数字。" },
    { name: "Line", title: "评分走势", description: "示例数据：虚构工具的周评分变化。" },
    { name: "Distribution", title: "评分分布", description: "示例数据：一组虚构评分的 1–5 星分布，柱色使用评分色。" },
  ],
  notes: [
    "颜色只使用既有 token：--foreground、--indigo、--warning、--rating。坐标轴文字使用等宽字体，网格线使用 border 色。",
    "图表不使用渐变，柱与线均为纯色。",
  ],
});
