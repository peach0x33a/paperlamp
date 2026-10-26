<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="browser-chrome-header"
    :class="cn('flex h-11 items-center gap-3 border-b bg-card px-3', props.class)"
  >
    <slot />
  </div>
</template>
