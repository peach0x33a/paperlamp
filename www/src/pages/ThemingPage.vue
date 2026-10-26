<script setup lang="ts">
import tokens from "@/styles/tokens.json"
import { nextTick, ref, watch } from "vue"
import CodeBlock from "../components/CodeBlock.vue"
import { useTheme } from "../composables/useTheme"

const { isDark } = useTheme()

const groups: { title: string, note: string, vars: [string, string][] }[] = [
  {
    title: "中性骨架",
    note: "大部分层级由这几个颜色完成。",
    vars: [
      ["background", "应用背景（纸）"],
      ["card", "卡片 / 弹窗表面"],
      ["foreground", "主文字（墨）"],
      ["muted-foreground", "辅助文字、元数据"],
      ["border", "边框、分割线"],
      ["primary", "主按钮填充"],
      ["primary-foreground", "主按钮文字"],
      ["overlay", "遮罩（纸色 80%）"],
    ],
  },
  {
    title: "中性弱填充",
    note: "由 border 按透明度派生，对应 shadcn 的 secondary / muted / accent。",
    vars: [
      ["secondary", "次按钮填充（60%）"],
      ["accent", "悬停底纹（50%）"],
      ["muted", "骨架屏、轨道（40%）"],
    ],
  },
  {
    title: "Indigo · 交互强调",
    note: "交互强调色，用于悬停描边、链接与提示面板。常驻文字用 indigo-text。",
    vars: [
      ["indigo", "hover 文字 / 描边"],
      ["indigo-text", "常驻强调文字"],
      ["indigo-bar", "面板 4px 色条"],
      ["indigo-wash", "面板底纹"],
    ],
  },
  {
    title: "状态色",
    note: "只用于状态反馈。评分星色配等宽数字；红色只用于文字。",
    vars: [
      ["rating", "星级金"],
      ["featured", "精选墨"],
      ["featured-wash", "精选底纹"],
      ["featured-border", "精选描边"],
      ["warning", "警告图标"],
      ["warning-text", "警告文字"],
      ["warning-bar", "警告色条"],
      ["warning-wash", "警告底纹"],
      ["destructive", "错误文字"],
    ],
  },
]

const resolved = ref<Record<string, string>>({})
watch(isDark, async () => {
  await nextTick()
  const cs = getComputedStyle(document.documentElement)
  resolved.value = Object.fromEntries(groups.flatMap(g => g.vars).map(([v]) => [v, cs.getPropertyValue(`--${v}`).trim()]))
}, { immediate: true })

const type = [
  ["headline-xl", "观书有感"],
  ["headline-lg", "半亩方塘一鉴开"],
  ["headline-md", "天光云影共徘徊"],
  ["title-md", "问渠那得清如许"],
  ["body-md", "为有源头活水来。正文使用霞鹜文楷屏幕阅读版，行高 1.7，段落限宽约 42rem。"],
  ["body-sm", "辅助描述与小号正文，行高 1.6。"],
  ["label-md", "label-md · Fira Code 500"],
  ["label-sm", "2026-10-26 · v0.1.0"],
  ["label-xs", "LABEL-XS · 700"],
] as const

const radii = [
  ["rounded-sm", "--radius × 0.5 · 控件"],
  ["rounded-md", "--radius · 容器"],
  ["rounded-lg", "--radius × 1.5 · Toast"],
  ["rounded-full", "药丸"],
] as const

const shadows = [
  ["shadow-sm", "浅纹面板"],
  ["shadow-lg", "下拉菜单"],
  ["shadow-xl", "卡片 hover"],
  ["shadow-2xl", "弹窗 / Toast"],
] as const

const lightVars = Object.entries(tokens.light).slice(0, 14).map(([k, v]) => `  --${k}: ${v};`).join("\n")
const snippet = `:root {\n${lightVars}\n  /* … */\n}\n\n.dark {\n  --background: ${tokens.dark.background};\n  /* … */\n}`
</script>

<template>
  <article class="max-w-3xl">
    <p class="mb-2 label-sm text-muted-foreground">
      入门
    </p>
    <h1 class="headline-lg">
      主题与 Token
    </h1>
    <p class="mt-3 max-w-[42rem] text-muted-foreground">
      主题以 CSS 变量表达，命名与 shadcn 保持一致，因此任意 shadcn-vue 组件都能直接套用纸灯。
      变量由 <code class="label-sm text-foreground">DESIGN.md</code> 的 frontmatter 生成，修改请改 DESIGN.md。右上角可以切换亮色与暗色。
    </p>

    <section v-for="g in groups" :key="g.title" class="mt-12">
      <h2 class="headline-md">
        {{ g.title }}
      </h2>
      <p class="mt-1 text-sm text-muted-foreground">
        {{ g.note }}
      </p>
      <div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        <div v-for="[v, label] in g.vars" :key="v" class="overflow-hidden rounded-md border bg-card">
          <div class="h-16 border-b" :style="{ background: `var(--${v})` }" />
          <div class="p-3">
            <p class="text-sm font-bold">
              {{ label }}
            </p>
            <p class="mt-1 label-xs font-medium text-muted-foreground">
              --{{ v }}
            </p>
            <p class="mt-0.5 truncate label-xs font-medium text-muted-foreground" :title="resolved[v]">
              {{ resolved[v] }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-12">
      <h2 class="headline-md">
        排版
      </h2>
      <p class="mt-1 text-sm text-muted-foreground">
        每个层级都是一个 Tailwind 工具类：<code class="label-sm text-foreground">class="headline-md"</code>。数字与元数据用等宽，正文与标题用文楷。
      </p>
      <div class="mt-4 divide-y rounded-md border bg-card">
        <div v-for="[cls, sample] in type" :key="cls" class="flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <p :class="cls" class="min-w-0">
            {{ sample }}
          </p>
          <code class="shrink-0 label-xs font-medium text-muted-foreground">.{{ cls }}</code>
        </div>
      </div>
    </section>

    <section class="mt-12 grid gap-8 sm:grid-cols-2">
      <div>
        <h2 class="headline-md">
          圆角
        </h2>
        <p class="mt-3 text-sm text-muted-foreground">
          三档圆角都由 <code class="label-sm text-foreground">--radius</code>（默认 8px）推导，改这一个变量即可。可以在<RouterLink to="/create" class="text-foreground underline underline-offset-4 hover:text-indigo">构建</RouterLink>页里预览。
        </p>
        <div class="mt-4 grid grid-cols-2 gap-3">
          <div v-for="[cls, label] in radii" :key="cls" class="flex flex-col items-center gap-2 rounded-md border bg-card p-4">
            <div class="h-12 w-16 border-2 border-foreground bg-background" :class="cls" />
            <code class="label-xs font-medium text-muted-foreground">{{ label }}</code>
          </div>
        </div>
      </div>
      <div>
        <h2 class="headline-md">
          阴影
        </h2>
        <div class="mt-4 grid grid-cols-2 gap-3">
          <div v-for="[cls, label] in shadows" :key="cls" class="flex flex-col items-center gap-2 rounded-md border bg-card p-4">
            <div class="h-12 w-16 rounded-md border bg-card" :class="cls" />
            <code class="label-xs font-medium text-muted-foreground">{{ label }}</code>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-12">
      <h2 class="headline-md">
        生成的变量
      </h2>
      <p class="mt-1 mb-4 text-sm text-muted-foreground">
        修改 DESIGN.md 后运行 <code class="label-sm text-foreground">bun run build:tokens</code>，输出到 <code class="label-sm text-foreground">registry/styles/paperlamp.css</code>。
      </p>
      <CodeBlock :code="snippet" lang="css" file="registry/styles/paperlamp.css" />
    </section>
  </article>
</template>
