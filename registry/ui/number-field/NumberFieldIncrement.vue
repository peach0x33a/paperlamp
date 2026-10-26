<script setup lang="ts">
import type { NumberFieldIncrementProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { Plus } from "lucide-vue-next"
import { NumberFieldIncrement, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<NumberFieldIncrementProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NumberFieldIncrement
    data-slot="number-field-increment"
    v-bind="forwardedProps"
    :class="cn(
      'flex w-9 shrink-0 cursor-pointer items-center justify-center border-l text-muted-foreground',
      'transition-colors duration-150 ease-quiet hover:bg-accent hover:text-foreground',
      'outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring',
      'disabled:pointer-events-none disabled:opacity-50',
      props.class,
    )"
  >
    <slot>
      <Plus class="size-4" />
    </slot>
  </NumberFieldIncrement>
</template>
