<script setup lang="ts">
import type { RangeCalendarGridHeadProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { RangeCalendarGridHead, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<RangeCalendarGridHeadProps & { class?: HTMLAttributes["class"] }>()
const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarGridHead
    data-slot="range-calendar-grid-head"
    v-bind="forwardedProps"
    :class="cn(props.class)"
  >
    <slot />
  </RangeCalendarGridHead>
</template>
