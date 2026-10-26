# 贡献指南 · 如何新增一个组件

纸灯的组件源码放在 `registry/ui/<name>/`，文档演示放在
`www/src/demos/<name>/`，两者都是**自动发现**的 —— 不需要编辑任何中央列表。

## 目录约定

```
registry/ui/<name>/            # 会被 `paperlamp add` 原样拷进用户项目
  <Name>.vue                   # 每个子部件一个 SFC（DialogContent.vue、DialogTitle.vue…）
  index.ts                     # 导出所有部件 + cva 变体（如有）
www/src/demos/<name>/
  meta.ts                      # defineMeta({...}) —— 标题、中文名、分类、示例列表
  Default.vue                  # 第一个示例 = 页面顶部的主预览
  <Other>.vue                  # 其余示例，文件名与 meta.examples[].name 一致
```

- `<name>` 使用 kebab-case，与 shadcn-vue 同名（`alert-dialog`、`radio-group`…）。
- 组件文件内只用这些导入路径：`@/lib/utils`（`cn`）、`@/components/ui/<other>`、
  以及 npm 包。**禁止**相对路径跨目录、禁止导入 `www/` 下的任何东西。
- 可用依赖：`reka-ui`、`class-variance-authority`、`lucide-vue-next`、`@vueuse/core`、
  `vue-sonner`。需要新依赖时先与维护者确认 —— `build:registry` 会拒绝未声明的包。

## 组件写法（对齐 shadcn-vue new-york-v4）

参考 `registry/ui/button/`：

```vue
<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { DialogContent, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<DialogContentProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<DialogContentEmits>()
const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <DialogContent data-slot="dialog-content" v-bind="forwarded" :class="cn('…', props.class)">
    <slot />
  </DialogContent>
</template>
```

- 每个根元素带 `data-slot="<part-name>"`；接受 `class` 并用 `cn()` 合并。
- 双引号、无分号（SFC 内）；`index.ts` 可用分号。
- 动画使用 `tw-animate-css`（`data-[state=open]:animate-in fade-in-0 zoom-in-95` 等）。

## 纸灯视觉规则（必须遵守，详见 DESIGN.md）

| 主题 | 规则 |
| --- | --- |
| 颜色 | 只用语义类：`bg-background`(纸) `bg-card`/`bg-popover`(表面) `text-foreground`(墨) `text-muted-foreground` `border`(默认就是 border 色) `bg-primary text-primary-foreground` `hover:bg-primary-hover` `bg-secondary` `bg-muted` `bg-accent`(中性悬停底纹) `bg-overlay`(遮罩)。**禁止**写死色值或 Tailwind 调色板色（`zinc-*`、`red-*`…）。|
| 强调 | Indigo 家族：`text-indigo`（hover/描边）`text-indigo-text`（常驻文字）`bg-indigo-wash` `bg-indigo-bar`。状态：`text-rating`（星金，必须配等宽数字）`text-featured bg-featured-wash border-featured-border` `text-warning text-warning-text bg-warning-wash bg-warning-bar`。|
| 红色 | `text-destructive` **只能作文字**，绝不做背景或边框（`aria-invalid` 时边框也用 `border-destructive` 例外允许，仅表单校验）。|
| 圆角 | 控件 `rounded-sm`(4px)：按钮、输入、徽章、头像、菜单项、弹窗面板；容器 `rounded-md`(8px)：卡片、表格壳、下拉/浮层面板、横幅；`rounded-lg`(12px) 只给 Toast；药丸 `rounded-full`。|
| 阴影 | `shadow-sm` 面板 / `shadow-lg` 下拉与浮层 / `shadow-xl` 仅卡片 hover / `shadow-2xl` 弹窗与 Toast。默认扁平，靠边框。|
| 遮罩 | `bg-overlay backdrop-blur-sm`，绝不使用黑色遮罩。|
| 焦点 | 输入类：`focus-visible:border-foreground`，无光晕；按钮/可点击项：`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`。|
| 字体 | 正文/标题默认文楷（`font-sans`）；元数据、标签、快捷键、数字用 `font-mono` 或排版类 `label-md` / `label-sm` / `label-xs`。标题类：`headline-xl/lg/md`、`title-md`、`body-md/sm`。不用全大写、不加字距。|
| 动效 | `duration-150 ease-quiet` 微交互；卡片 hover 300ms；入场 `animate-fade-up`。无 spring、无 bounce、无 scale（按钮）。|
| 图标 | 只用 `lucide-vue-next`，尺寸阶梯 12/14/16/20/24/32/48px（`size-3` `size-3.5` `size-4` `size-5` `size-6` `size-8` `size-12`）。|

## 演示文案

- 中文、直接、平静、略带玩心；场景取自「幻觉产物 / AI Toybox」：工具卡、标签、评分、
  AI 总结、评论、维护状态、内容警告等。
- 不写 "Lorem ipsum"、"Scroll to explore" 之类套话，不编造统计数字。

## meta.ts

```ts
import { defineMeta } from "@docs/docs/types";

export default defineMeta({
  title: "Dialog",
  zh: "对话框",
  description: "一句话说明用途。",
  category: "overlay", // general | form | layout | overlay | feedback | navigation | data | signature
  examples: [{ name: "Default", title: "基础用法" }, { name: "Form", title: "表单", description: "…" }],
  notes: ["可选：设计约束说明。"],
});
```

## 校验

```bash
bun run build:registry           # 推断依赖并生成 www/public/r/*.json
bunx vue-tsc --noEmit            # 类型检查
```
