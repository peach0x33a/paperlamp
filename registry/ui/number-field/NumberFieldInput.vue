<script setup lang="ts">
import type { NumberFieldInputProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { NumberFieldInput, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<NumberFieldInputProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NumberFieldInput
    data-slot="number-field-input"
    v-bind="forwardedProps"
    :class="cn(
      'h-full w-full min-w-0 flex-1 bg-transparent px-3 py-2 text-center font-mono tabular-nums text-sm text-foreground outline-none',
      'placeholder:text-muted-foreground',
      'disabled:cursor-not-allowed',
      props.class,
    )"
  />
</template>
