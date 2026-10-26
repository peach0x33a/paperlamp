<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import { grouped } from "../docs/catalog"

// 文档 and 组件 share the layout but not the sidebar: each section lists only its own pages.
const route = useRoute()
const inComponents = computed(() => route.path.startsWith("/docs/components"))

const guides = [
  { to: "/docs", label: "介绍" },
  { to: "/docs/installation", label: "安装" },
  { to: "/docs/theming", label: "主题与 Token" },
]
const linkClass = (to: string) =>
  route.path === to
    ? "bg-accent text-foreground font-bold"
    : "text-muted-foreground hover:text-foreground"
</script>

<template>
  <nav class="flex flex-col gap-6 text-sm">
    <div v-if="!inComponents">
      <p class="mb-2 px-2 label-sm text-muted-foreground">入门</p>
      <RouterLink
        v-for="g in guides"
        :key="g.to"
        :to="g.to"
        class="block rounded-sm px-2 py-1 transition-colors duration-150"
        :class="linkClass(g.to)"
      >
        {{ g.label }}
      </RouterLink>
    </div>
    <template v-else>
      <RouterLink
        to="/docs/components"
        class="block rounded-sm px-2 py-1 transition-colors duration-150"
        :class="linkClass('/docs/components')"
      >
        全部组件
      </RouterLink>
      <div v-for="group in grouped" :key="group.id">
        <p class="mb-2 px-2 label-sm text-muted-foreground">
          {{ group.label }}
        </p>
        <RouterLink
          v-for="item in group.items"
          :key="item.slug"
          :to="`/docs/components/${item.slug}`"
          class="flex items-baseline justify-between gap-2 rounded-sm px-2 py-1 transition-colors duration-150"
          :class="linkClass(`/docs/components/${item.slug}`)"
        >
          <span>{{ item.title }}</span>
          <span class="label-xs font-medium opacity-70">{{ item.zh }}</span>
        </RouterLink>
      </div>
    </template>
  </nav>
</template>
