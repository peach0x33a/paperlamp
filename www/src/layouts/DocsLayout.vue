<script setup lang="ts">
import { Menu, X } from "lucide-vue-next"
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import DocsSidebar from "../components/DocsSidebar.vue"

const open = ref(false)
const route = useRoute()
watch(() => route.path, () => (open.value = false))
</script>

<template>
  <div class="mx-auto flex w-full max-w-6xl flex-1 gap-10 px-4">
    <aside class="sticky top-16 hidden h-[calc(100svh-4rem)] w-56 shrink-0 overflow-y-auto py-8 pr-2 md:block">
      <DocsSidebar />
    </aside>

    <!-- Mobile sidebar -->
    <button
      type="button"
      class="fixed right-4 bottom-4 z-40 inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg md:hidden"
      :aria-label="open ? '关闭导航' : '打开导航'"
      @click="open = !open"
    >
      <X v-if="open" class="size-5" />
      <Menu v-else class="size-5" />
    </button>
    <div v-if="open" class="fixed inset-0 top-16 z-30 overflow-y-auto bg-background px-4 py-6 md:hidden">
      <DocsSidebar />
    </div>

    <main class="min-w-0 flex-1 py-8">
      <RouterView v-slot="{ Component, route: r }">
        <component :is="Component" :key="r.fullPath" class="animate-fade-up" />
      </RouterView>
    </main>
  </div>
</template>
