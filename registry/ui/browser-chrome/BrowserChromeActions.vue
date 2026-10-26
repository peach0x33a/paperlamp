<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="browser-chrome-actions"
    :class="cn('flex shrink-0 items-center gap-0.5', props.class)"
  >
    <slot />
  </div>
</template>
