<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="empty"
    :class="cn('flex min-w-0 flex-1 animate-fade-up flex-col items-center justify-center gap-6 text-balance rounded-md bg-border/20 px-6 py-12 text-center', props.class)"
  >
    <slot />
  </div>
</template>
