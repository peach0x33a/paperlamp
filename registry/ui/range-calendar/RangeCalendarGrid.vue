<script setup lang="ts">
import type { RangeCalendarGridProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { RangeCalendarGrid, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<RangeCalendarGridProps & { class?: HTMLAttributes["class"] }>()
const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarGrid
    data-slot="range-calendar-grid"
    v-bind="forwardedProps"
    :class="cn('w-full border-collapse select-none', props.class)"
  >
    <slot />
  </RangeCalendarGrid>
</template>
