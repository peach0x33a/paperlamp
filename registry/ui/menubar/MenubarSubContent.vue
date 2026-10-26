<script setup lang="ts">
import type { MenubarSubContentEmits, MenubarSubContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { MenubarPortal, MenubarSubContent, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<MenubarSubContentProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<MenubarSubContentEmits>()
const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <MenubarPortal>
    <MenubarSubContent
      data-slot="menubar-sub-content"
      v-bind="forwarded"
      :class="cn(
        'z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg outline-none',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        props.class,
      )"
    >
      <slot />
    </MenubarSubContent>
  </MenubarPortal>
</template>
