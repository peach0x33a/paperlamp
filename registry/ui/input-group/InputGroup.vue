<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    role="group"
    data-slot="input-group"
    :class="cn(
      'group/input-group relative flex min-h-9 w-full min-w-0 flex-wrap items-center rounded-sm border bg-background text-sm text-foreground outline-none',
      'transition-[border-color] duration-150 ease-quiet',
      'focus-within:border-foreground',
      'has-[[data-slot=input-group-control][aria-invalid=true]]:border-destructive',
      'has-[[data-slot=input-group-control]:disabled]:opacity-50',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
