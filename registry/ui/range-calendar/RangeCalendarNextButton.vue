<script setup lang="ts">
import type { RangeCalendarNextProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronRight } from "lucide-vue-next"
import { RangeCalendarNext, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const props = defineProps<RangeCalendarNextProps & { class?: HTMLAttributes["class"] }>()
const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarNext
    data-slot="range-calendar-next-button"
    v-bind="forwardedProps"
    :class="cn(buttonVariants({ variant: 'ghost', size: 'icon-sm' }), 'text-muted-foreground', props.class)"
  >
    <slot>
      <ChevronRight class="size-4" />
    </slot>
  </RangeCalendarNext>
</template>
