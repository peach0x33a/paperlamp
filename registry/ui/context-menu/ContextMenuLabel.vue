<script setup lang="ts">
import type { ContextMenuLabelProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ContextMenuLabel } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<ContextMenuLabelProps & { inset?: boolean, class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class", "inset")
</script>

<template>
  <ContextMenuLabel data-slot="context-menu-label" v-bind="delegated" :class="cn('px-2 py-1.5 text-sm font-medium', inset && 'pl-8', props.class)">
    <slot />
  </ContextMenuLabel>
</template>
