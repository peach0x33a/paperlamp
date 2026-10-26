import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Button Group",
  zh: "按钮组",
  description: "把相关按钮连成一组。相邻按钮共用边线，组内去掉内侧圆角，看起来像一个控件。",
  category: "general",
  examples: [
    { name: "Default", title: "基础用法", description: "上一个 / 下一个，两个按钮共享一条边线。" },
    { name: "Dropdown", title: "与菜单组合", description: "最后一段是下拉菜单，适合放「更多操作」。" },
    { name: "Vertical", title: "纵向", description: "orientation=\"vertical\"，适合缩放这类竖向控件。" },
  ],
  notes: [
    "组内按钮的焦点环显示在最上层，不会被相邻按钮遮住。",
    "ButtonGroupText 用于只读文字，如页码或计数。",
  ],
});
