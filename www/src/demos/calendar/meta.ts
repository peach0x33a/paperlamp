import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Calendar",
  zh: "日历",
  description: "单日期选择的月历。今天加下划线，选中日期使用墨色底。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法", description: "选择上架日期。周末不可选，格子置灰。" },
    { name: "Bordered", title: "带边框", description: "默认无边框。与页面其他卡片需要区分时，添加 rounded-md border。" },
  ],
  notes: [
    "今天以下划线标出。选中日期使用 bg-primary，不加描边。",
    "非当前月份的日期降到 50% 不透明度，仍可点击切换月份。",
    "选择一段时间使用 Range Calendar（range-calendar）。需要放进输入框、点开才显示时，使用 Date Picker。",
  ],
});
