<script setup lang="ts">
import type { PopoverCloseProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { PopoverClose } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<PopoverCloseProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <PopoverClose
    data-slot="popover-close"
    v-bind="delegated"
    :class="cn(props.class)"
  >
    <slot />
  </PopoverClose>
</template>
