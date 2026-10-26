<script setup lang="ts">
import type { MenubarTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { MenubarTrigger } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<MenubarTriggerProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <MenubarTrigger
    data-slot="menubar-trigger"
    v-bind="delegated"
    :class="cn('flex cursor-default select-none items-center rounded-sm px-2 py-1 text-sm font-medium outline-none transition-colors duration-150 ease-quiet hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring data-[state=open]:bg-accent data-[state=open]:text-accent-foreground', props.class)"
  >
    <slot />
  </MenubarTrigger>
</template>
