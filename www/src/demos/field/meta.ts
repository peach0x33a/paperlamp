import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Field",
  zh: "表单字段",
  description: "把标签、控件、说明与校验信息组织成一个字段。垂直排列是默认；横向排列用于开关与设置行。",
  category: "form",
  examples: [
    { name: "Default", title: "基础用法", description: "提交工具的表单：链接字段校验失败时，错误信息出现在字段下方。" },
    { name: "Settings", title: "横向设置行", description: "orientation=\"horizontal\"：说明在左，开关在右，行间用细线分隔。" },
  ],
  notes: [
    "FieldError 接受 errors 数组或默认插槽；同一条信息重复时只显示一次。",
    "校验失败时在 Field 上加 data-invalid=\"true\"，文字变为 text-destructive，控件边框同样使用 aria-invalid。",
  ],
});
