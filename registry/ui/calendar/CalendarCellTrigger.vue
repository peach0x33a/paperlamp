<script setup lang="ts">
import type { CalendarCellTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CalendarCellTrigger, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes["class"] }>()
const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarCellTrigger
    data-slot="calendar-cell-trigger"
    v-bind="forwardedProps"
    :class="cn(
      'inline-flex size-8 items-center justify-center rounded-sm p-0 font-mono text-sm font-normal tabular-nums text-foreground',
      'outline-none transition-colors duration-150 ease-quiet hover:bg-accent',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      'data-[outside-view]:text-muted-foreground/50',
      'data-[today]:font-bold data-[today]:underline data-[today]:underline-offset-4',
      'data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:hover:bg-primary-hover',
      'data-[unavailable]:text-muted-foreground data-[unavailable]:line-through',
      'data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground data-[disabled]:line-through',
      props.class,
    )"
  >
    <slot />
  </CalendarCellTrigger>
</template>
