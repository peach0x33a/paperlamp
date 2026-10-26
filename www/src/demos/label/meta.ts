import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Label",
  zh: "字段标签",
  description: "为表单控件提供可点击的文字说明。通过 for 与控件的 id 关联，点击标签即可聚焦或切换控件。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Disabled", title: "禁用控件的标签" },
  ],
  notes: [
    "所有表单控件都应有可见的 Label，占位符不能替代标签。",
  ],
});
