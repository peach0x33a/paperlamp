<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
</script>

<template>
  <div
    data-slot="number-field-content"
    :class="cn(
      'flex h-9 w-full min-w-0 items-stretch overflow-hidden rounded-sm border bg-background text-sm text-foreground',
      'transition-[border-color] duration-150 ease-quiet',
      'focus-within:border-foreground',
      'has-[[aria-invalid=true]]:border-destructive',
      'has-disabled:cursor-not-allowed has-disabled:opacity-50',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
