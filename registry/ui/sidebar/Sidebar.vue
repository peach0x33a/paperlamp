<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useSidebar } from "./utils"

const props = withDefaults(defineProps<{
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
  /** Position against the nearest relative ancestor instead of the viewport (for docs previews). */
  contained?: boolean
  class?: HTMLAttributes["class"]
}>(), {
  side: "left",
  variant: "sidebar",
  collapsible: "offcanvas",
  contained: false,
})

const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

// Sizes are inline so they never depend on Tailwind scanning arbitrary values.
const collapsed = computed(() => state.value === "collapsed")
const panelWidth = computed(() => {
  if (!collapsed.value)
    return "var(--sidebar-width)"
  return props.collapsible === "icon" ? "var(--sidebar-width-icon)" : "var(--sidebar-width)"
})
const gapWidth = computed(() => {
  if (props.collapsible === "offcanvas" && collapsed.value)
    return "0px"
  return panelWidth.value
})
const panelOffset = computed(() => {
  if (props.collapsible === "offcanvas" && collapsed.value)
    return "calc(var(--sidebar-width) * -1)"
  return "0px"
})
</script>

<template>
  <div
    v-if="collapsible === 'none'"
    data-slot="sidebar"
    :style="{ width: 'var(--sidebar-width)' }"
    :class="cn('flex h-full flex-col bg-card text-card-foreground', side === 'left' ? 'border-r' : 'border-l', props.class)"
  >
    <slot />
  </div>

  <Sheet v-else-if="isMobile" :open="openMobile" @update:open="setOpenMobile">
    <SheetContent
      :side="side"
      :class="cn('bg-card p-0 text-card-foreground', props.class)"
    >
      <SheetHeader class="sr-only">
        <SheetTitle>导航菜单</SheetTitle>
        <SheetDescription>在这里切换页面。</SheetDescription>
      </SheetHeader>
      <div data-sidebar="sidebar" data-slot="sidebar" class="flex h-full w-full flex-col">
        <slot />
      </div>
    </SheetContent>
  </Sheet>

  <div
    v-else
    data-slot="sidebar"
    class="group peer text-card-foreground"
    :data-state="state"
    :data-collapsible="collapsed ? collapsible : ''"
    :data-variant="variant"
    :data-side="side"
  >
    <div
      class="relative bg-transparent transition-[width] duration-150 ease-quiet"
      :style="{ width: gapWidth }"
    />
    <div
      :class="cn(
        contained ? 'absolute h-full' : 'fixed h-svh',
        'inset-y-0 z-10 flex transition-[left,right,width] duration-150 ease-quiet',
        side === 'left' ? 'left-0' : 'right-0',
        variant === 'floating' || variant === 'inset' ? 'p-2' : side === 'left' ? 'border-r' : 'border-l',
        props.class,
      )"
      :style="{
        width: panelWidth,
        [side === 'left' ? 'left' : 'right']: panelOffset,
      }"
    >
      <div
        data-sidebar="sidebar"
        data-slot="sidebar-inner"
        :class="cn(
          'relative flex h-full w-full flex-col overflow-hidden bg-card',
          variant === 'floating' && 'rounded-md border shadow-sm',
        )"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
