<script setup lang="ts">
import type { MenubarSubTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronRight } from "lucide-vue-next"
import { MenubarSubTrigger } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<MenubarSubTriggerProps & { inset?: boolean, class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class", "inset")
</script>

<template>
  <MenubarSubTrigger
    data-slot="menubar-sub-trigger"
    v-bind="delegated"
    :class="cn('flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[state=open]:bg-accent', inset && 'pl-8', props.class)"
  >
    <slot />
    <ChevronRight class="ml-auto size-4 text-muted-foreground" />
  </MenubarSubTrigger>
</template>
