<script setup lang="ts">
import type { StepperItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { StepperItem } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<StepperItemProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <StepperItem
    data-slot="stepper-item"
    v-bind="delegated"
    :class="cn(
      'group/step flex items-start',
      'data-[orientation=horizontal]:flex-1',
      'data-[orientation=vertical]:w-full data-[orientation=vertical]:flex-col',
      '[&:last-child]:flex-none',
      props.class,
    )"
  >
    <slot />
  </StepperItem>
</template>
