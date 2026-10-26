<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { useSidebar } from "./utils"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
const { toggleSidebar } = useSidebar()
</script>

<template>
  <button
    data-slot="sidebar-rail"
    type="button"
    aria-label="切换侧边栏"
    title="切换侧边栏"
    tabindex="-1"
    :class="cn(
      'absolute inset-y-0 right-0 z-20 hidden w-4 translate-x-1/2 transition-all duration-150 ease-quiet md:flex',
      'after:absolute after:inset-y-0 after:left-1/2 after:w-px after:-translate-x-1/2 after:bg-border hover:after:bg-muted-foreground',
      'group-data-[side=right]:right-auto group-data-[side=right]:left-0 group-data-[side=right]:-translate-x-1/2',
      'outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring',
      props.class,
    )"
    @click="toggleSidebar"
  />
</template>
