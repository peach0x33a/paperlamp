<script setup lang="ts">
import { useRoute } from "vue-router"
import { Toaster } from "@/components/ui/sonner"
import SiteHeader from "./components/SiteHeader.vue"

const route = useRoute()
</script>

<template>
  <div class="flex min-h-svh flex-col">
    <SiteHeader v-if="!route.meta.bare" />
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.matched[0]?.path" />
    </RouterView>
    <footer v-if="!route.meta.bare && !route.meta.app" class="mt-20 border-t border-dashed">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-6 label-sm text-muted-foreground">
        <span>纸灯 / Paperlamp · MIT 许可 · <a href="https://github.com/peach0x33a/paperlamp" class="underline-offset-4 hover:text-foreground hover:underline">GitHub</a></span>
        <span>Vue 3 · Reka UI · Tailwind CSS v4</span>
      </div>
    </footer>
    <Toaster />
  </div>
</template>
