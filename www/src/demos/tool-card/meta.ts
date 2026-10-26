import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "ToolCard",
  zh: "工具卡",
  description: "展厅里的一件展品：标题行 + 状态徽章 → 两行截断的简介 → 小标签 → 虚线分隔 → 等宽页脚（日期在左，星与分数在右）。",
  category: "signature",
  examples: [
    { name: "Default", title: "基础用法", description: "hover：边框转 indigo、上浮 4px、shadow-xl，300ms。" },
    { name: "Grid", title: "工具网格", description: "1 / 2 / 3 列，6 单位间距；页脚 mt-auto 让同一行卡片等高对齐。" },
    { name: "AsLink", title: "整卡链接", description: "as-child 交给 <a> 或 RouterLink，键盘焦点也触发同样的浮起。" },
  ],
  notes: [
    "hover 复合手势是全系统唯一的一个；shadow-xl 只出现在这里。",
    "卡内小标签比 TagChip 更安静：边框色 40% 底，hover 到 60%。",
  ],
});
