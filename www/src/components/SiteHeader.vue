<script setup lang="ts">
import { Box } from "lucide-vue-next"
import { useRoute } from "vue-router"
import ThemeToggle from "./ThemeToggle.vue"

const route = useRoute()
const links = [
  { to: "/docs", label: "文档", match: (p: string) => p === "/docs" || p === "/docs/installation" || p === "/docs/theming" },
  { to: "/docs/components", label: "组件", match: (p: string) => p.startsWith("/docs/components") },
  { to: "/create", label: "构建", match: (p: string) => p.startsWith("/create") },
]
</script>

<template>
  <header class="sticky top-0 z-40 h-16 border-b bg-overlay backdrop-blur-md">
    <div class="mx-auto flex h-full max-w-6xl items-center gap-6 px-4">
      <RouterLink to="/" class="flex items-center gap-2 font-bold tracking-wide">
        <Box class="size-6" />
        <span>纸灯</span>
        <span class="hidden label-sm text-muted-foreground sm:inline">Paperlamp</span>
      </RouterLink>
      <nav class="flex items-center gap-4 label-md">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="transition-colors duration-150"
          :class="l.match(route.path) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'"
        >
          {{ l.label }}
        </RouterLink>
      </nav>
      <div class="ml-auto flex items-center gap-2">
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
