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
        纸灯 / Paperlamp 是一套<strong>可复制的 Vue 组件</strong>，而不是一个 npm 依赖包。
        它沿用 shadcn 的思路：组件源码通过命令行拷进你的项目，归你所有、随你修改。
      </p>
      <p class="text-muted-foreground">
        每个组件由 Reka UI 无头原语提供可访问性与交互行为，Tailwind CSS v4 负责样式，
        <code class="label-sm text-foreground">class-variance-authority</code> 管理变体。
        所有颜色、字体、圆角、阴影与动效都来自仓库根目录的 <code class="label-sm text-foreground">DESIGN.md</code>，
        由 <code class="label-sm text-foreground">bun run build:tokens</code> 编译为 CSS 变量，亮暗两套主题共享同一层级结构。
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
          靠字重、留白与细边框建立层级，而不是饱和色块或重阴影。
        </p>
      </li>
      <li class="rounded-md border bg-card p-6">
        <p class="title-md">
          颜色各司其职
        </p>
        <p class="mt-1 text-sm text-muted-foreground">
          墨色管主操作，indigo 管交互，星金管评分，琥珀管精选，橙管警告，红只用于文字。
        </p>
      </li>
      <li class="rounded-md border bg-card p-6">
        <p class="title-md">
          双档圆角
        </p>
        <p class="mt-1 text-sm text-muted-foreground">
          控件 4px、容器 8px，Toast 专属 12px，药丸为全圆角。
        </p>
      </li>
      <li class="rounded-md border bg-card p-6">
        <p class="title-md">
          暗色同构
        </p>
        <p class="mt-1 text-sm text-muted-foreground">
          <code class="label-sm">html.dark</code> 切换共享变量，组件内不写任何暗色分支。
        </p>
      </li>
    </ul>

    <div class="mt-12 flex flex-wrap items-center gap-3">
      <RouterLink to="/docs/installation" :class="buttonVariants()">
        开始安装
      </RouterLink>
      <RouterLink to="/docs/components/button" :class="buttonVariants({ variant: 'outline' })">
        浏览 {{ entries.length }} 个组件
      </RouterLink>
    </div>
  </article>
</template>
