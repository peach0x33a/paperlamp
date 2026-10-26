import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Breadcrumb",
  zh: "面包屑",
  description: "告诉你当前页面在哪一层。分隔符是小号的 chevron，当前页是墨色加粗、不可点击的文字。",
  category: "navigation",
  examples: [
    { name: "Default", title: "基础用法", description: "首页 / 小游戏 / 像素小镇生成器。" },
    { name: "Collapsed", title: "省略中间层级", description: "层级较深时用省略号收起中间的路径。" },
  ],
  notes: [
    "列表使用等宽 label-sm，与标签、元数据保持同一套排版。",
    "当前页用 aria-current=\"page\"，不是链接。",
  ],
});
