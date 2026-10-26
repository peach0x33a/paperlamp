<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"

interface Props extends PrimitiveProps {
  size?: "sm" | "md"
  isActive?: boolean
  class?: HTMLAttributes["class"]
}
const props = withDefaults(defineProps<Props>(), { as: "a", size: "md", isActive: false })
</script>

<template>
  <Primitive
    data-slot="sidebar-menu-sub-button"
    data-sidebar="menu-sub-button"
    :as="as"
    :as-child="asChild"
    :data-size="size"
    :data-active="isActive"
    :class="cn(
      'flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-sm px-2 text-foreground outline-none transition-colors duration-150 ease-quiet hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-muted-foreground',
      'data-[size=md]:text-sm data-[size=sm]:text-xs',
      'data-[active=true]:bg-accent data-[active=true]:font-bold',
      props.class,
    )"
  >
    <slot />
  </Primitive>
</template>
