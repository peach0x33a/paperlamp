<script setup lang="ts">
import type { RangeCalendarHeadingProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { RangeCalendarHeading, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<RangeCalendarHeadingProps & { class?: HTMLAttributes["class"] }>()
const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarHeading
    data-slot="range-calendar-heading"
    v-bind="forwardedProps"
    :class="cn('text-sm font-bold text-foreground', props.class)"
  >
    <slot />
  </RangeCalendarHeading>
</template>
