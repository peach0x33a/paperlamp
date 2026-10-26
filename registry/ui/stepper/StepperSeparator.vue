<script setup lang="ts">
import type { StepperSeparatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { StepperSeparator } from "reka-ui"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<StepperSeparatorProps & { class?: HTMLAttributes["class"] }>(), {
  orientation: "horizontal",
  decorative: true,
})
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <StepperSeparator
    data-slot="stepper-separator"
    v-bind="delegated"
    :class="cn(
      'shrink-0 bg-border transition-[background-color] duration-150 ease-quiet',
      'data-[state=completed]:bg-foreground',
      'data-[orientation=horizontal]:mt-4 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:flex-1 data-[orientation=horizontal]:self-start',
      'data-[orientation=vertical]:ml-4 data-[orientation=vertical]:h-8 data-[orientation=vertical]:w-px',
      props.class,
    )"
  />
</template>
