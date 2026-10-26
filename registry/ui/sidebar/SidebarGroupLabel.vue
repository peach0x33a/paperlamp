<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<{ asChild?: boolean, as?: string, class?: HTMLAttributes["class"] }>(), {
  as: "div",
})
</script>

<template>
  <Primitive
    data-slot="sidebar-group-label"
    data-sidebar="group-label"
    :as="as"
    :as-child="asChild"
    :class="cn('flex h-8 shrink-0 items-center rounded-sm px-2 label-sm text-muted-foreground outline-none transition-[margin,opacity] duration-150 ease-quiet focus-visible:outline-2 focus-visible:outline-ring group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0', props.class)"
  >
    <slot />
  </Primitive>
</template>
