<script setup lang="ts">
import type { RangeCalendarHeadCellProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { RangeCalendarHeadCell, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<RangeCalendarHeadCellProps & { class?: HTMLAttributes["class"] }>()
const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarHeadCell
    data-slot="range-calendar-head-cell"
    v-bind="forwardedProps"
    :class="cn('w-8 p-0 text-center text-xs font-normal text-muted-foreground', props.class)"
  >
    <slot />
  </RangeCalendarHeadCell>
</template>
