<script setup lang="ts">
import type { ComboboxCancelProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { X } from "lucide-vue-next"
import { ComboboxCancel, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<ComboboxCancelProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <ComboboxCancel
    data-slot="combobox-cancel"
    v-bind="forwardedProps"
    :class="cn(
      'flex shrink-0 items-center justify-center rounded-sm text-muted-foreground outline-none',
      'transition-colors duration-150 ease-quiet hover:text-foreground',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      'disabled:pointer-events-none disabled:opacity-50',
      props.class,
    )"
  >
    <slot>
      <X class="size-4" />
    </slot>
  </ComboboxCancel>
</template>
