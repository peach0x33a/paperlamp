<script setup lang="ts">
import { entries, grouped } from "../docs/catalog"
</script>

<template>
  <article class="max-w-3xl">
    <p class="mb-2 label-sm text-muted-foreground">
      组件
    </p>
    <h1 class="headline-lg">
      全部组件
    </h1>
    <p class="mt-3 max-w-[42rem] text-muted-foreground">
      共 {{ entries.length }} 个。每个组件都可以用 <code class="label-sm text-foreground">npx paperlamp@latest add &lt;名称&gt;</code> 单独添加。
    </p>

    <section v-for="group in grouped" :key="group.id" class="mt-10">
      <h2 :id="group.id" class="title-md">
        {{ group.label }}
      </h2>
      <div class="mt-4 grid gap-3 sm:grid-cols-2">
        <RouterLink
          v-for="item in group.items"
          :key="item.slug"
          :to="`/docs/components/${item.slug}`"
          class="group flex flex-col gap-1.5 rounded-md border bg-card p-4 transition-[border-color] duration-150 ease-quiet outline-none hover:border-indigo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <span class="flex items-baseline justify-between gap-2">
            <span class="font-bold">{{ item.title }}</span>
            <span class="label-sm text-muted-foreground">{{ item.slug }}</span>
          </span>
          <span class="text-sm text-muted-foreground">{{ item.zh }} · {{ item.description }}</span>
        </RouterLink>
      </div>
    </section>
  </article>
</template>
