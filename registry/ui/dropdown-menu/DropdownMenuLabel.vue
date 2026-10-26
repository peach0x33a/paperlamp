<script setup lang="ts">
import type { DropdownMenuLabelProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { DropdownMenuLabel } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<DropdownMenuLabelProps & { inset?: boolean, class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class", "inset")
</script>

<template>
  <DropdownMenuLabel data-slot="dropdown-menu-label" v-bind="delegated" :class="cn('px-2 py-1.5 label-sm text-muted-foreground', inset && 'pl-8', props.class)">
    <slot />
  </DropdownMenuLabel>
</template>
