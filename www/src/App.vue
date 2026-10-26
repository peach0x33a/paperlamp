<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner"
import SiteHeader from "./components/SiteHeader.vue"
</script>

<template>
  <div class="flex min-h-svh flex-col">
    <SiteHeader />
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.matched[0]?.path" />
    </RouterView>
    <footer class="mt-20 border-t border-dashed">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-6 label-sm text-muted-foreground">
        <span>纸灯 / Paperlamp · 设计 token 唯一事实源为 DESIGN.md</span>
        <span>Vue 3 · Reka UI · Tailwind CSS v4</span>
      </div>
    </footer>
    <Toaster />
  </div>
</template>
