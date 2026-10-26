import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Pin Input",
  zh: "验证码输入",
  description: "逐位输入的验证码或邀请码，每格是独立输入框。支持粘贴整串数字和一次性验证码自动填充。",
  category: "form",
  examples: [
    { name: "Default", title: "邀请码", description: "六位，中间以分隔符分成两组。" },
    { name: "Verify", title: "验证码", description: "四位验证码，填满后才能提交。" },
  ],
  notes: [
    "每格焦点为 border-foreground，不加光晕；数字使用等宽数字。",
    "PinInputGroup 负责排列，分隔符只是视觉标记，不参与输入。",
  ],
});
