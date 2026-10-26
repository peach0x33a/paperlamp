<script setup lang="ts">
import type { ContextMenuSeparatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ContextMenuSeparator } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<ContextMenuSeparatorProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <ContextMenuSeparator data-slot="context-menu-separator" v-bind="delegated" :class="cn('-mx-1 my-1 h-px bg-border', props.class)">
    <slot />
  </ContextMenuSeparator>
</template>
