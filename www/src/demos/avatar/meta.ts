import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Avatar",
  zh: "头像",
  description: "2.5rem 的方形头像，4px 圆角。图片加载失败时退回到边框色底上的加粗首字。",
  category: "general",
  examples: [
    { name: "Default", title: "基础用法" },
    { name: "Fallback", title: "首字占位", description: "评论区多数用户没有头像 —— 直接显示昵称首字。" },
    { name: "Comment", title: "评论行" },
  ],
  notes: ["头像是方的，不是圆的：控件统一 4px 圆角，圆形只留给药丸与红绿灯。"],
});
