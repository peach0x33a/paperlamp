<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="button-group-text"
    :class="cn(
      'flex items-center gap-2 rounded-sm border bg-muted px-3 font-mono text-sm font-medium text-muted-foreground',
      '[&_svg:not([class*=\'size-\'])]:size-4',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
