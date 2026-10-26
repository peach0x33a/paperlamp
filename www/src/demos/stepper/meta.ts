import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Stepper",
  zh: "步骤条",
  description: "把一件事拆成几步。已完成的步骤填充墨色并显示勾号，当前步骤描边，未到的步骤保持淡边框。",
  category: "navigation",
  examples: [
    { name: "Default", title: "提交工具", description: "填写信息、上传截图、等待审核，用上一步 / 下一步推进。" },
    { name: "Vertical", title: "纵向", description: "orientation=\"vertical\"，适合放在侧栏或窄列里。" },
  ],
  notes: [
    "步骤触发器是按钮，可以用键盘方向键在步骤之间切换焦点。",
    "已完成的步骤使用墨色填充，而不是红色或指示色。",
  ],
});
