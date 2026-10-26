<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="tool-card-footer"
    :class="cn('mt-auto flex items-center justify-between gap-3 border-t border-dashed pt-4 label-sm text-muted-foreground', props.class)"
  >
    <slot />
  </div>
</template>
