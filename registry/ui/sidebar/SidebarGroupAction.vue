<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"

interface Props extends PrimitiveProps {
  class?: HTMLAttributes["class"]
}
const props = withDefaults(defineProps<Props>(), { as: "button" })
</script>

<template>
  <Primitive
    data-slot="sidebar-group-action"
    data-sidebar="group-action"
    :as="as"
    :as-child="asChild"
    :class="cn('absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-sm p-0 text-muted-foreground outline-none transition-colors duration-150 ease-quiet hover:bg-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring group-data-[collapsible=icon]:hidden [&>svg]:size-4 [&>svg]:shrink-0', props.class)"
  >
    <slot />
  </Primitive>
</template>
