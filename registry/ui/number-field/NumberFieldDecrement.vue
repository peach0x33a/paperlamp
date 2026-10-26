<script setup lang="ts">
import type { NumberFieldDecrementProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { Minus } from "lucide-vue-next"
import { NumberFieldDecrement, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<NumberFieldDecrementProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NumberFieldDecrement
    data-slot="number-field-decrement"
    v-bind="forwardedProps"
    :class="cn(
      'flex w-9 shrink-0 cursor-pointer items-center justify-center border-r text-muted-foreground',
      'transition-colors duration-150 ease-quiet hover:bg-accent hover:text-foreground',
      'outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring',
      'disabled:pointer-events-none disabled:opacity-50',
      props.class,
    )"
  >
    <slot>
      <Minus class="size-4" />
    </slot>
  </NumberFieldDecrement>
</template>
