<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
</script>

<template>
  <span data-slot="dropdown-menu-shortcut" :class="cn('ml-auto font-mono label-xs text-muted-foreground', props.class)">
    <slot />
  </span>
</template>
