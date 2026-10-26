<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
</script>

<template>
  <div
    data-slot="sidebar-menu-badge"
    data-sidebar="menu-badge"
    :class="cn('pointer-events-none absolute top-1/2 right-1 flex h-5 -translate-y-1/2 min-w-5 items-center justify-center rounded-sm px-1 font-mono label-xs tabular-nums text-muted-foreground select-none group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-foreground peer-data-[active=true]/menu-button:text-foreground', props.class)"
  >
    <slot />
  </div>
</template>
