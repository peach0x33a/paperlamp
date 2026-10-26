import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Calendar",
  zh: "日历",
  description: "单日期选择的月历。日期是纸上的格子，今天划线加粗，选中的那一格用墨色填满。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法", description: "选择上架日期。周末不上新，格子置灰并划线。" },
    { name: "Bordered", title: "带边框", description: "容器默认没有边框，需要与页面其他卡片区分时可以加上 rounded-md border。" },
  ],
  notes: [
    "今天以下划线标出；选中日期使用 bg-primary 墨色底，不再加描边。",
    "不在当前月份的日期降到 50% 不透明度，仍可点击切换月份。",
  ],
});
