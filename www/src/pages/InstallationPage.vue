<script setup lang="ts">
import { computed } from "vue"
import CodeBlock from "../components/CodeBlock.vue"
import { addCommand, initCommand, registryBase } from "../docs/registry"

const base = computed(registryBase)

const steps = computed(() => [
  {
    title: "创建 Vue + Tailwind v4 项目",
    body: "任意 Vite / Nuxt 项目均可，只要接入了 Tailwind CSS v4，并把 @ 路径别名指向 src。",
    code: "npm create vite@latest my-app -- --template vue-ts\ncd my-app\nnpm install tailwindcss @tailwindcss/vite",
    lang: "bash" as const,
  },
  {
    title: "初始化纸灯",
    body: "写入主题 paperlamp.css、cn() 工具函数和 paperlamp.json，在主样式文件顶部补上所需的 @import，并安装字体等依赖。想先调好圆角，可以到「构建」页生成 preset 再带上 --preset。",
    code: initCommand(),
    lang: "bash" as const,
  },
  {
    title: "按需添加组件",
    body: "组件源码会复制到 src/components/ui/ 下，它依赖的其他组件和 npm 包会一并安装。已存在的文件默认跳过，加 --overwrite 覆盖。",
    code: `${addCommand(["button", "tool-card"])}\n# 查看全部组件\nnpx paperlamp@latest list`,
    lang: "bash" as const,
  },
])

const config = `{
  "registry": "${base.value}",
  "css": "src/style.css",
  "radius": "8px",
  "paths": { "ui": "src/components/ui", "lib": "src/lib" },
  "aliases": { "ui": "@/components/ui", "lib": "@/lib" }
}`

const manual = `@import "tailwindcss";
@import "tw-animate-css";
@import "lxgw-wenkai-screen-webfont/lxgwwenkaiscreen.css";
@import "@fontsource/fira-code/400.css";
@import "@fontsource/fira-code/500.css";
@import "@fontsource/fira-code/700.css";
@import "./paperlamp.css";`
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
      纸灯用自己的命令行工具 <code class="label-sm text-foreground">paperlamp</code> 安装，组件源码直接复制进你的项目。
      本站同时是 registry：每个组件对应 <code class="label-sm text-foreground">{{ base }}/&lt;name&gt;.json</code>。
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
      paperlamp.json
    </h2>
    <p class="mt-3 mb-4 text-sm text-muted-foreground">
      init 生成的配置。组件之间用 <code class="label-sm text-foreground">@/components/ui</code> 和 <code class="label-sm text-foreground">@/lib</code> 互相引用；
      项目别名不同时改 aliases，CLI 会在复制时改写导入路径。
    </p>
    <CodeBlock :code="config" lang="json" file="paperlamp.json" />

    <h2 class="mt-14 headline-md">
      手动接入
    </h2>
    <p class="mt-3 mb-4 text-sm text-muted-foreground">
      不使用 CLI 时，把 <code class="label-sm text-foreground">registry/styles/paperlamp.css</code> 复制到项目中，安装
      <code class="label-sm text-foreground">tw-animate-css</code>、<code class="label-sm text-foreground">lxgw-wenkai-screen-webfont</code>、<code class="label-sm text-foreground">@fontsource/fira-code</code>，再在主样式文件里按顺序引入：
    </p>
    <CodeBlock :code="manual" lang="css" file="src/style.css" />
  </article>
</template>
