import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Select",
  zh: "下拉选择",
  description: "从固定选项中选择一个。触发器与 Input 边框一致，浮层为卡片。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法", description: "触发器关联 label，选中项右侧显示勾号。" },
    { name: "Groups", title: "分组与禁用", description: "SelectGroup + SelectLabel 分组，禁用项降到 50% 不透明度。" },
  ],
  notes: [
    "触发器焦点为 border-foreground，不加光晕。",
    "菜单项高亮使用 bg-accent，菜单中不使用红色。",
  ],
});
