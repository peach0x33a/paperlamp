import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Field",
  zh: "表单字段",
  description: "组织标签、控件、说明与校验信息。默认垂直排列，设置行使用横向排列。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法", description: "链接校验失败时，错误信息显示在字段下方。" },
    { name: "Settings", title: "横向设置行", description: "orientation=\"horizontal\"：说明在左，开关在右，行间用细线分隔。" },
  ],
  notes: [
    "FieldError 接受 errors 数组或默认插槽，相同信息只显示一次。",
    "校验失败时在 Field 上加 data-invalid=\"true\"，文字变为 text-destructive，控件同时设置 aria-invalid。",
  ],
});
