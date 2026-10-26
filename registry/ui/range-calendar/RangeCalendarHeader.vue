<script setup lang="ts">
import type { RangeCalendarHeaderProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { RangeCalendarHeader, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<RangeCalendarHeaderProps & { class?: HTMLAttributes["class"] }>()
const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarHeader
    data-slot="range-calendar-header"
    v-bind="forwardedProps"
    :class="cn('flex items-center justify-between gap-2', props.class)"
  >
    <slot />
  </RangeCalendarHeader>
</template>
