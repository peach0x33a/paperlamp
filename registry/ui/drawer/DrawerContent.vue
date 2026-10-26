<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { DrawerContent } from "vaul-vue"
import { cn } from "@/lib/utils"
import DrawerOverlay from "./DrawerOverlay.vue"
import DrawerPortal from "./DrawerPortal.vue"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
</script>

<template>
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerContent
      data-slot="drawer-content"
      :class="cn(
        'group/drawer-content fixed z-60 flex flex-col overflow-y-auto bg-card text-card-foreground shadow-2xl outline-none',
        'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:max-h-[80svh] data-[vaul-drawer-direction=bottom]:rounded-t-md data-[vaul-drawer-direction=bottom]:border-t',
        'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:max-h-[80svh] data-[vaul-drawer-direction=top]:rounded-b-md data-[vaul-drawer-direction=top]:border-b',
        'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:h-full data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:max-w-sm data-[vaul-drawer-direction=left]:rounded-r-md data-[vaul-drawer-direction=left]:border-r',
        'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:h-full data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:max-w-sm data-[vaul-drawer-direction=right]:rounded-l-md data-[vaul-drawer-direction=right]:border-l',
        props.class,
      )"
    >
      <div
        data-slot="drawer-handle"
        class="mx-auto mt-3 hidden h-1.5 w-12 shrink-0 rounded-full bg-border group-data-[vaul-drawer-direction=bottom]/drawer-content:block"
      />
      <slot />
    </DrawerContent>
  </DrawerPortal>
</template>
