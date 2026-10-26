<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <span
    data-slot="tool-card-tag"
    :class="cn('rounded-sm bg-muted px-1.5 py-0.5 label-xs text-foreground/70 transition-colors duration-150 ease-quiet hover:bg-secondary', props.class)"
  >
    <slot />
  </span>
</template>
