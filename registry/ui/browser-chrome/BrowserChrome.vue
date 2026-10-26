<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="browser-chrome"
    :class="cn('flex flex-col overflow-hidden rounded-md border bg-card text-card-foreground shadow-lg', props.class)"
  >
    <slot />
  </div>
</template>
