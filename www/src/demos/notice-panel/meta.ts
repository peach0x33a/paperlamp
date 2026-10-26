import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "NoticePanel",
  zh: "折叠面板",
  description: "CollapsiblePanel：4px 左边条、柔和底纹、只有右侧圆角、shadow-sm。AI 总结用 indigo，普通说明用中性灰。",
  category: "signature",
  examples: [
    { name: "Default", title: "AI 总结" },
    { name: "Neutral", title: "中性", description: "variant=\"neutral\"：灰色边条，标题用墨色。" },
    { name: "Collapsed", title: "默认收起", description: ":default-open=\"false\"；也可以用 v-model:open 从外部控制展开。" },
  ],
  notes: [
    "强调色只出现在边条、图标与标题上；正文始终是墨色。",
  ],
});
