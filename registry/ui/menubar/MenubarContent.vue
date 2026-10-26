<script setup lang="ts">
import type { MenubarContentEmits, MenubarContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { MenubarContent, MenubarPortal, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<MenubarContentProps & { class?: HTMLAttributes["class"] }>(), {
  align: "start",
  alignOffset: -4,
  sideOffset: 8,
})
const emits = defineEmits<MenubarContentEmits>()
const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <MenubarPortal>
    <MenubarContent
      data-slot="menubar-content"
      v-bind="forwarded"
      :class="cn(
        'z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg outline-none',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        props.class,
      )"
    >
      <slot />
    </MenubarContent>
  </MenubarPortal>
</template>
