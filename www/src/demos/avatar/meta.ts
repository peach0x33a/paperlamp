import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Avatar",
  zh: "头像",
  description: "2.5rem 方形头像，4px 圆角。图片加载失败时显示边框色底上的加粗首字。",
  category: "data",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Fallback", title: "首字占位", description: "多数用户没有头像时，直接显示昵称首字。" },
    { name: "Comment", title: "评论行" },
  ],
  notes: ["头像为方形，与其他控件一样使用 4px 圆角。"],
});
