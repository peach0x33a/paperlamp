<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <!-- The payload canvas is the one place theme surfaces don't apply: pure white / pure black, hard corners. -->
  <div data-slot="browser-chrome-canvas" :class="cn('relative grow bg-white dark:bg-black', props.class)">
    <slot />
  </div>
</template>
