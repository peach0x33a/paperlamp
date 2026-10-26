import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Checkbox",
  zh: "复选框",
  description: "勾选一个或多个独立选项。选中时填充墨色，半选时显示横线，用于表示下级选项部分被选中。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Indeterminate", title: "半选", description: "父级复选框在部分子项选中时显示横线，点击会全选或全不选。" },
    { name: "Disabled", title: "禁用" },
  ],
  notes: [
    "选中态使用墨色填充，与 Button 的主操作同色，但它只是状态而不是动作。",
    "键盘焦点使用 2px 墨色外轮廓。",
  ],
});
