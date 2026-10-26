<script setup lang="ts">
import type { RangeCalendarCellProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { RangeCalendarCell, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<RangeCalendarCellProps & { class?: HTMLAttributes["class"] }>()
const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarCell
    data-slot="range-calendar-cell"
    v-bind="forwardedProps"
    :class="cn(
      'relative p-0 text-center',
      // The in-range band lives on the cell so neighbouring days join into one strip;
      // it rounds only where a row or the range begins and ends.
      'has-data-selected:bg-border has-data-highlighted:bg-border',
      'first:has-data-selected:rounded-l-sm last:has-data-selected:rounded-r-sm',
      'first:has-data-highlighted:rounded-l-sm last:has-data-highlighted:rounded-r-sm',
      'has-data-selection-start:rounded-l-sm has-data-selection-end:rounded-r-sm',
      props.class,
    )"
  >
    <slot />
  </RangeCalendarCell>
</template>
