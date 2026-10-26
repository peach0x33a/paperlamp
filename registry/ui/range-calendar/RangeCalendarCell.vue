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
    :class="cn('relative p-0 text-center', props.class)"
  >
    <slot />
  </RangeCalendarCell>
</template>
