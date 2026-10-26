<script setup lang="ts">
import { buttonVariants } from "@/components/ui/button"
import { entries } from "../docs/catalog"
</script>

<template>
  <article class="max-w-3xl">
    <p class="mb-2 label-sm text-muted-foreground">
      入门
    </p>
    <h1 class="headline-lg">
      介绍
    </h1>
    <div class="mt-4 flex max-w-[42rem] flex-col gap-4 leading-relaxed">
      <p>
        纸灯 / Paperlamp 是一套 Vue 3 组件。和 shadcn 一样，组件源码通过命令行复制进你的项目，之后可以直接修改。
      </p>
      <p class="text-muted-foreground">
        交互与可访问性来自 Reka UI，样式用 Tailwind CSS v4，变体用 <code class="label-sm text-foreground">class-variance-authority</code>。
        颜色、字体、圆角、阴影与动效定义在仓库根目录的 <code class="label-sm text-foreground">DESIGN.md</code> 里，
        由 <code class="label-sm text-foreground">bun run build:tokens</code> 编译成 CSS 变量。
      </p>
    </div>

    <h2 class="mt-12 headline-md">
      设计原则
    </h2>
    <ul class="mt-4 grid gap-4 sm:grid-cols-2">
      <li class="rounded-md border bg-card p-6">
        <p class="title-md">
          文本先行
        </p>
        <p class="mt-1 text-sm text-muted-foreground">
          层级靠字重、留白和细边框，少用色块与阴影。
        </p>
      </li>
      <li class="rounded-md border bg-card p-6">
        <p class="title-md">
          颜色按用途分配
        </p>
        <p class="mt-1 text-sm text-muted-foreground">
          墨色用于主操作，indigo 用于交互强调，橙色用于警告，红色只用于错误文字。
        </p>
      </li>
      <li class="rounded-md border bg-card p-6">
        <p class="title-md">
          两档圆角
        </p>
        <p class="mt-1 text-sm text-muted-foreground">
          控件 4px，容器 8px，全局提示 12px，胶囊为全圆角。
        </p>
      </li>
      <li class="rounded-md border bg-card p-6">
        <p class="title-md">
          暗色只换变量
        </p>
        <p class="mt-1 text-sm text-muted-foreground">
          <code class="label-sm">html.dark</code> 切换一组变量，组件里基本不写 <code class="label-sm">dark:</code> 样式（浏览器外壳的画布除外）。
        </p>
      </li>
    </ul>

    <div class="mt-12 flex flex-wrap items-center gap-3">
      <RouterLink to="/docs/installation" :class="buttonVariants()">
        开始安装
      </RouterLink>
      <RouterLink to="/docs/components" :class="buttonVariants({ variant: 'outline' })">
        浏览 {{ entries.length }} 个组件
      </RouterLink>
    </div>
  </article>
</template>
