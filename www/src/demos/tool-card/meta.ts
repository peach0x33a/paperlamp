import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Tool Card",
  zh: "工具卡",
  description: "工具卡片：标题行与状态徽章、两行截断的简介、小标签、虚线分隔线，以及等宽页脚（日期在左，评分在右）。",
  category: "data",
  examples: [
    { name: "Default", title: "基础用法", description: "hover 时边框变为 indigo、上浮 4px、阴影为 shadow-xl，过渡 300ms。" },
    { name: "Grid", title: "工具网格", description: "1 / 2 / 3 列，间距 6 单位；页脚 mt-auto 让同一行卡片等高对齐。" },
    { name: "AsLink", title: "整卡链接", description: "as-child 交给 <a> 或 RouterLink，键盘焦点也触发同样的上浮效果。" },
  ],
  notes: [
    "卡片的 hover 是组合动效（边框、位移、阴影）。shadow-xl 只在这里使用。",
    "卡内小标签边框色为 40% 底，hover 时提高到 60%。",
  ],
});
