import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Breadcrumb",
  zh: "面包屑",
  description: "显示当前页面所在的层级。分隔符为小号 chevron，当前页为加粗墨色文字，不可点击。",
  category: "navigation",
  examples: [
    { name: "Default", title: "基础用法", description: "三级路径，当前页不可点击。" },
    { name: "Collapsed", title: "省略中间层级", description: "层级较深时用省略号折叠中间路径。" },
  ],
  notes: [
    "列表使用等宽 label-sm，与标签和元数据的排版一致。",
    "当前页使用 aria-current=\"page\"，不是链接。",
  ],
});
