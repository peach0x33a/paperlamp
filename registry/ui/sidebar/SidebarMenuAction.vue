<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"

interface Props extends PrimitiveProps {
  showOnHover?: boolean
  class?: HTMLAttributes["class"]
}
const props = withDefaults(defineProps<Props>(), { as: "button", showOnHover: false })
</script>

<template>
  <Primitive
    data-slot="sidebar-menu-action"
    data-sidebar="menu-action"
    :as="as"
    :as-child="asChild"
    :class="cn(
      'absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-sm p-0 text-muted-foreground outline-none transition-colors duration-150 ease-quiet hover:bg-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring peer-hover/menu-button:text-foreground group-data-[collapsible=icon]:hidden [&>svg]:size-4 [&>svg]:shrink-0',
      showOnHover && 'peer-data-[active=true]/menu-button:text-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0',
      props.class,
    )"
  >
    <slot />
  </Primitive>
</template>
