<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <h3
    data-slot="tool-card-title"
    :class="cn('line-clamp-2 min-w-0 title-md', props.class)"
  >
    <slot />
  </h3>
</template>
