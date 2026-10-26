<script setup lang="ts">
import type { RangeCalendarCellTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { RangeCalendarCellTrigger, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<RangeCalendarCellTriggerProps & { class?: HTMLAttributes["class"] }>()
const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarCellTrigger
    data-slot="range-calendar-cell-trigger"
    v-bind="forwardedProps"
    :class="cn(
      'inline-flex size-8 items-center justify-center rounded-sm p-0 font-mono text-sm font-normal tabular-nums text-foreground',
      'outline-none transition-colors duration-150 ease-quiet hover:bg-accent',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      'data-[outside-view]:text-muted-foreground/50',
      'data-[today]:font-bold data-[today]:underline data-[today]:underline-offset-4',
      'data-[highlighted]:bg-transparent data-[selected]:bg-transparent',
      'data-[selection-start]:bg-primary data-[selection-start]:text-primary-foreground data-[selection-start]:hover:bg-primary-hover',
      'data-[selection-end]:bg-primary data-[selection-end]:text-primary-foreground data-[selection-end]:hover:bg-primary-hover',
      'data-[unavailable]:text-muted-foreground data-[unavailable]:line-through',
      'data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground data-[disabled]:line-through',
      props.class,
    )"
  >
    <slot />
  </RangeCalendarCellTrigger>
</template>
