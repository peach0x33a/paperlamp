<script setup lang="ts">
import { computed } from "vue"
import CodeBlock from "../components/CodeBlock.vue"
import { registryBase, registryUrl } from "../docs/registry"

const base = computed(registryBase)

const steps = computed(() => [
  {
    title: "创建 Vue + Tailwind v4 项目",
    body: "任意 Vite / Nuxt 项目均可，只要已接入 Tailwind CSS v4 并配置了 `@/*` 路径别名。",
    code: "npm create vite@latest my-app -- --template vue-ts\ncd my-app\nnpm install tailwindcss @tailwindcss/vite",
    lang: "bash" as const,
  },
  {
    title: "初始化 shadcn-vue",
    body: "生成 components.json 与 cn() 工具函数。",
    code: "npx shadcn-vue@latest init",
    lang: "bash" as const,
  },
  {
    title: "安装纸灯主题",
    body: "paperlamp 主题条目会把亮暗两套 CSS 变量、字体与基础样式写入你的全局 CSS。",
    code: `npx shadcn-vue@latest add ${registryUrl("paperlamp")}`,
    lang: "bash" as const,
  },
  {
    title: "（可选）注册为命名空间",
    body: "在 components.json 中声明 registry 后，即可用 @paperlamp/<组件名> 简写。",
    code: `{\n  "registries": {\n    "@paperlamp": "${base.value}/{name}.json"\n  }\n}`,
    lang: "json" as const,
  },
  {
    title: "按需添加组件",
    body: "组件源码会被复制到 components/ui/ 下，依赖（reka-ui、lucide-vue-next 等）自动安装。",
    code: `npx shadcn-vue@latest add @paperlamp/button @paperlamp/tool-card\n# 或使用完整地址\nnpx shadcn-vue@latest add ${registryUrl("card")}`,
    lang: "bash" as const,
  },
])

const fonts = `/* 字体：霞鹜文楷屏幕版 + Fira Code */
@import "lxgw-wenkai-screen-webfont/lxgwwenkaiscreen.css";
@import "@fontsource/fira-code/400.css";
@import "@fontsource/fira-code/500.css";
@import "@fontsource/fira-code/700.css";`

const manual = `@import "tailwindcss";
@import "tw-animate-css";
@import "./paperlamp.css"; /* 来自 registry/styles/paperlamp.css */`
</script>

<template>
  <article class="max-w-3xl">
    <p class="mb-2 label-sm text-muted-foreground">
      入门
    </p>
    <h1 class="headline-lg">
      安装
    </h1>
    <p class="mt-3 max-w-[42rem] text-muted-foreground">
      纸灯以 shadcn 兼容的 registry 发布。本站即是 registry 服务器：每个组件对应
      <code class="label-sm text-foreground">{{ base }}/&lt;name&gt;.json</code>。
    </p>

    <ol class="mt-10 flex flex-col gap-10">
      <li v-for="(s, i) in steps" :key="s.title" class="relative border-l pl-8">
        <span class="absolute -left-3.5 top-0 inline-flex size-7 items-center justify-center rounded-full border bg-card label-sm">
          {{ i + 1 }}
        </span>
        <h2 class="title-md">
          {{ s.title }}
        </h2>
        <p class="mt-1 mb-4 text-sm text-muted-foreground">
          {{ s.body }}
        </p>
        <CodeBlock :code="s.code" :lang="s.lang" />
      </li>
    </ol>

    <h2 class="mt-14 headline-md">
      手动接入
    </h2>
    <p class="mt-3 mb-4 text-sm text-muted-foreground">
      不使用 CLI 时，把 <code class="label-sm text-foreground">registry/styles/paperlamp.css</code> 复制到项目中，并在全局 CSS 里按顺序引入：
    </p>
    <CodeBlock :code="manual" lang="css" file="src/style.css" />
    <p class="mt-6 mb-4 text-sm text-muted-foreground">
      字体通过 npm 安装 <code class="label-sm text-foreground">lxgw-wenkai-screen-webfont</code> 与 <code class="label-sm text-foreground">@fontsource/fira-code</code>：
    </p>
    <CodeBlock :code="fonts" lang="css" />
  </article>
</template>
