import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "BrowserChrome",
  zh: "浏览器外壳",
  description: "Payload 模式的 iframe 外壳：表面色标题栏、macOS 红绿灯、可点击复制的药丸地址栏、工具按钮，以及纯白 / 纯黑画布。",
  category: "signature",
  examples: [
    { name: "Default", title: "基础用法", description: "点击地址栏复制网址，同时触发 copy 事件。" },
    { name: "Iframe", title: "嵌入 iframe", description: "画布是硬边的嵌入面，容器负责 8px 圆角与 shadow-lg。" },
  ],
  notes: [
    "红绿灯 #FF5F56 #FFBD2E #27C93F 是全系统唯一允许写死的颜色；画布的纯白 / 纯黑是唯一不跟随主题表面的区域。",
    "状态药丸是三个允许大写 + 字距的「浏览器方言」之一，只用于外壳，不用于内容。",
  ],
});
