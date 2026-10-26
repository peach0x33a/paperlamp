<script setup lang="ts">
import type { StepperTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { StepperTrigger } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<StepperTriggerProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <StepperTrigger
    data-slot="stepper-trigger"
    v-bind="delegated"
    :class="cn(
      'flex items-center gap-3 rounded-sm outline-none',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      'data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:gap-2',
      'disabled:pointer-events-none disabled:opacity-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      props.class,
    )"
  >
    <slot />
  </StepperTrigger>
</template>
