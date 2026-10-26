<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <span
    data-slot="browser-chrome-status"
    :class="cn('shrink-0 rounded-full bg-muted px-2 py-0.5 label-xs uppercase tracking-tighter text-muted-foreground', props.class)"
  >
    <slot />
  </span>
</template>
