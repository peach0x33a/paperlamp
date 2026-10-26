<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <!-- The macOS lights are the only sanctioned hardcoded colors in the system. -->
  <div data-slot="browser-chrome-traffic-lights" aria-hidden="true" :class="cn('flex shrink-0 items-center gap-1.5', props.class)">
    <span class="size-3 rounded-full bg-[#FF5F56]" />
    <span class="size-3 rounded-full bg-[#FFBD2E]" />
    <span class="size-3 rounded-full bg-[#27C93F]" />
  </div>
</template>
