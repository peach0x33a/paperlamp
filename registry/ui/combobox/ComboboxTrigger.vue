<script setup lang="ts">
import type { ComboboxTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronDown } from "lucide-vue-next"
import { ComboboxTrigger, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<ComboboxTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <ComboboxTrigger
    data-slot="combobox-trigger"
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
      <ChevronDown class="size-4" />
    </slot>
  </ComboboxTrigger>
</template>
