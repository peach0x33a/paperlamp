<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { SidebarMenuButtonVariants } from "."
import { Primitive } from "reka-ui"
import { computed } from "vue"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { sidebarMenuButtonVariants } from "."
import { useSidebar } from "./utils"

interface Props extends PrimitiveProps {
  variant?: SidebarMenuButtonVariants["variant"]
  size?: SidebarMenuButtonVariants["size"]
  isActive?: boolean
  /** Shown in a tooltip when the sidebar is collapsed to icons. */
  tooltip?: string
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  variant: "default",
  size: "default",
  isActive: false,
})

const { isMobile, state } = useSidebar()
const showTooltip = computed(() => !!props.tooltip && state.value === "collapsed" && !isMobile.value)
</script>

<template>
  <Tooltip v-if="showTooltip">
    <TooltipTrigger as-child>
      <Primitive
        data-slot="sidebar-menu-button"
        data-sidebar="menu-button"
        :data-size="size"
        :data-active="isActive"
        :as="as"
        :as-child="asChild"
        :class="cn(sidebarMenuButtonVariants({ variant, size }), 'peer/menu-button', props.class)"
      >
        <slot />
      </Primitive>
    </TooltipTrigger>
    <TooltipContent side="right" align="center">
      {{ tooltip }}
    </TooltipContent>
  </Tooltip>
  <Primitive
    v-else
    data-slot="sidebar-menu-button"
    data-sidebar="menu-button"
    :data-size="size"
    :data-active="isActive"
    :as="as"
    :as-child="asChild"
    :class="cn(sidebarMenuButtonVariants({ variant, size }), 'peer/menu-button', props.class)"
  >
    <slot />
  </Primitive>
</template>
