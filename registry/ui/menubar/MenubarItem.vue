<script setup lang="ts">
import type { MenubarItemEmits, MenubarItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { MenubarItem, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<MenubarItemProps & {
  inset?: boolean
  /** destructive = red text only, never a red fill (DESIGN.md). */
  variant?: "default" | "destructive"
  class?: HTMLAttributes["class"]
}>(), {
  variant: "default",
})
const emits = defineEmits<MenubarItemEmits>()
const delegated = reactiveOmit(props, "class", "inset", "variant")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <MenubarItem
    data-slot="menubar-item"
    :data-inset="inset ? '' : undefined"
    :data-variant="variant"
    v-bind="forwarded"
    :class="cn('relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors duration-150 ease-quiet data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[variant=destructive]:text-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4', inset && 'pl-8', props.class)"
  >
    <slot />
  </MenubarItem>
</template>
