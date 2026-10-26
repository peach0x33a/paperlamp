<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="tool-card-tags"
    :class="cn('flex flex-wrap gap-1.5', props.class)"
  >
    <slot />
  </div>
</template>
