import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Stepper",
  zh: "步骤条",
  description: "把一件事拆成几步。已完成的步骤为墨色填充加勾号，当前步骤为描边，未到的步骤为淡边框。",
  category: "navigation",
  examples: [
    { name: "Default", title: "提交工具", description: "填写信息、上传截图、等待审核，用上一步 / 下一步推进。" },
    { name: "Vertical", title: "纵向", description: "orientation=\"vertical\"，适合侧栏或窄列。" },
  ],
  notes: [
    "步骤触发器是按钮，可用方向键在步骤之间移动焦点。",
    "已完成的步骤使用墨色填充，不使用红色或强调色。",
  ],
});
