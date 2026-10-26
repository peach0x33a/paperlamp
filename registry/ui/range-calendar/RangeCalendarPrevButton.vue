<script setup lang="ts">
import type { RangeCalendarPrevProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronLeft } from "lucide-vue-next"
import { RangeCalendarPrev, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const props = defineProps<RangeCalendarPrevProps & { class?: HTMLAttributes["class"] }>()
const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarPrev
    data-slot="range-calendar-prev-button"
    v-bind="forwardedProps"
    :class="cn(buttonVariants({ variant: 'ghost', size: 'icon-sm' }), 'text-muted-foreground', props.class)"
  >
    <slot>
      <ChevronLeft class="size-4" />
    </slot>
  </RangeCalendarPrev>
</template>
