import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Sonner",
  zh: "轻提示",
  description: "顶部居中的反转药丸：墨底纸字、12px 圆角、shadow-2xl。基于 vue-sonner。",
  category: "feedback",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Types", title: "类型" },
    { name: "Action", title: "带操作" },
  ],
  notes: [
    "在应用根部放置一次 <Toaster />，之后在任意位置调用 toast()。",
    "Toast 是唯一使用 12px 圆角与 0.01em 字距的组件。",
    "文案直接、平静：说明发生了什么，不加感叹号。",
  ],
});
