import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Chart",
  zh: "图表",
  description: "基于 Unovis 的图表构件。ChartContainer 把 config 转成 --color-<key> 变量，Tooltip 与 Legend 读取同一份配置。",
  category: "data",
  examples: [
    { name: "Default", title: "基础用法", description: "示例数据：每周新增工具数，按标签堆叠。悬停查看当周的分项数字。" },
    { name: "Line", title: "评分走势", description: "示例数据：某个虚构工具的周评分变化，用于观察评分是否回升。" },
    { name: "Distribution", title: "评分分布", description: "示例数据：一组虚构评分的 1–5 星分布，柱色使用评分的星金。" },
  ],
  notes: [
    "颜色只来自既有的 token：--foreground、--indigo、--warning、--rating；坐标轴文字使用等宽字，网格线使用 border 色。",
    "图表不使用渐变，柱子与线条都是纯色。",
  ],
});
