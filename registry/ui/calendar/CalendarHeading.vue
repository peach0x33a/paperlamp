<script setup lang="ts">
import type { CalendarHeadingProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CalendarHeading, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<CalendarHeadingProps & { class?: HTMLAttributes["class"] }>()
const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeading
    data-slot="calendar-heading"
    v-bind="forwardedProps"
    :class="cn('text-sm font-bold text-foreground', props.class)"
  >
    <slot />
  </CalendarHeading>
</template>
