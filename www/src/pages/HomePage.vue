<script setup lang="ts">
import type { Component } from "vue"
import { ArrowRight } from "lucide-vue-next"
import { buttonVariants } from "@/components/ui/button"
import CodeBlock from "../components/CodeBlock.vue"
import CalendarDemo from "../demos/calendar/Default.vue"
import ChartDemo from "../demos/chart/Distribution.vue"
import FieldDemo from "../demos/field/Default.vue"
import NoticePanelDemo from "../demos/notice-panel/Default.vue"
import RatingDemo from "../demos/rating/Input.vue"
import StepperDemo from "../demos/stepper/Default.vue"
import TagsInputDemo from "../demos/tags-input/Default.vue"
import ToolCardDemo from "../demos/tool-card/Default.vue"
import { entries } from "../docs/catalog"
import { addCommand } from "../docs/registry"

// Live demos from the docs, in three hand-balanced columns. Each tile links to its page.
const showcase: { slug: string, demo: Component }[][] = [
  [
    { slug: "tool-card", demo: ToolCardDemo },
    { slug: "stepper", demo: StepperDemo },
    { slug: "notice-panel", demo: NoticePanelDemo },
  ],
  [
    { slug: "calendar", demo: CalendarDemo },
    { slug: "chart", demo: ChartDemo },
    { slug: "tags-input", demo: TagsInputDemo },
  ],
  [
    { slug: "field", demo: FieldDemo },
    { slug: "rating", demo: RatingDemo },
  ],
]
const titleOf = (slug: string) => entries.find((e) => e.slug === slug)

const principles = [
  { title: "源码归你", body: "组件通过命令行拷进项目，不是 npm 依赖。要改样式、改行为，直接改文件。" },
  { title: "文本先行", body: "靠字重、留白与细边框建立层级，不靠饱和色块和重阴影。" },
  { title: "一份 DESIGN.md", body: "颜色、字体、圆角、动效都写在 DESIGN.md 里，编译成 CSS 变量，亮暗两套共用。" },
  { title: "可访问", body: "交互与键盘行为来自 Reka UI 无头原语，焦点环和对比度按 WCAG 校验。" },
]
</script>

<template>
  <main class="mx-auto w-full max-w-6xl px-4">
    <section class="flex flex-col items-center py-20 text-center sm:py-28">
      <RouterLink
        to="/docs/components"
        class="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1 label-sm text-muted-foreground transition-[border-color] duration-150 ease-quiet hover:border-indigo"
      >
        {{ entries.length }} 个组件 · Vue 3 · Reka UI · Tailwind CSS v4
        <ArrowRight class="size-3.5" />
      </RouterLink>
      <h1 class="mt-6 max-w-3xl headline-xl sm:text-5xl sm:leading-tight">
        安静、以文字为先的 Vue 组件
      </h1>
      <p class="mt-5 max-w-[36rem] text-lg leading-relaxed text-muted-foreground">
        纸灯 / Paperlamp 是一套可复制的组件和设计系统。墨色正文、纸面底色、一抹 indigo，适合做内容为主的中文站点。
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <RouterLink to="/docs/installation" :class="buttonVariants({ size: 'lg' })">
          开始使用
        </RouterLink>
        <RouterLink to="/docs/components" :class="buttonVariants({ variant: 'outline', size: 'lg' })">
          浏览组件
        </RouterLink>
        <RouterLink to="/create" :class="buttonVariants({ variant: 'ghost', size: 'lg' })">
          构建主题
        </RouterLink>
      </div>
      <CodeBlock :code="addCommand(['button'])" lang="bash" class="mt-10 w-full max-w-md text-left" />
    </section>

    <section class="grid items-start gap-4 lg:grid-cols-3">
      <div v-for="(column, i) in showcase" :key="i" class="grid gap-4">
        <div v-for="item in column" :key="item.slug" class="rounded-md border bg-card">
          <RouterLink
            :to="`/docs/components/${item.slug}`"
            class="flex items-baseline justify-between gap-2 border-b border-dashed px-4 py-2.5 label-sm text-muted-foreground transition-colors duration-150 ease-quiet hover:text-foreground"
          >
            <span>{{ titleOf(item.slug)?.title }} {{ titleOf(item.slug)?.zh }}</span>
            <ArrowRight class="size-3.5 self-center" />
          </RouterLink>
          <div class="flex justify-center p-5">
            <component :is="item.demo" />
          </div>
        </div>
      </div>
    </section>

    <section class="mt-20">
      <h2 class="headline-md">
        设计原则
      </h2>
      <ul class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="p in principles" :key="p.title" class="rounded-md border bg-card p-6">
          <p class="title-md">
            {{ p.title }}
          </p>
          <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
            {{ p.body }}
          </p>
        </li>
      </ul>
    </section>
  </main>
</template>
