<script setup lang="ts">
import type { CalendarHeadCellProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CalendarHeadCell, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<CalendarHeadCellProps & { class?: HTMLAttributes["class"] }>()
const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeadCell
    data-slot="calendar-head-cell"
    v-bind="forwardedProps"
    :class="cn('w-8 p-0 text-center text-xs font-normal text-muted-foreground', props.class)"
  >
    <slot />
  </CalendarHeadCell>
</template>
