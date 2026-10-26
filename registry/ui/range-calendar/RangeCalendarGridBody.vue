<script setup lang="ts">
import type { RangeCalendarGridBodyProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { RangeCalendarGridBody, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<RangeCalendarGridBodyProps & { class?: HTMLAttributes["class"] }>()
const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarGridBody
    data-slot="range-calendar-grid-body"
    v-bind="forwardedProps"
    :class="cn(props.class)"
  >
    <slot />
  </RangeCalendarGridBody>
</template>
