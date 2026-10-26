import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Select",
  zh: "下拉选择",
  description: "从一组固定选项里挑一个。触发器与输入框同一张纸、同一条边框；浮层是纸面上的一张卡。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法", description: "触发器带 label 关联，选中项右侧出现勾号。" },
    { name: "Groups", title: "分组与禁用", description: "SelectGroup + SelectLabel 分组，禁用项降到 50% 不透明度。" },
  ],
  notes: [
    "触发器的焦点是 border-foreground，不加光晕。",
    "浮层与菜单项使用 bg-accent 中性底纹作为高亮，红色不出现在菜单里。",
  ],
});
