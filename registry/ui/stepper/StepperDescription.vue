<script setup lang="ts">
import type { StepperDescriptionProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { StepperDescription } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<StepperDescriptionProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <StepperDescription
    data-slot="stepper-description"
    v-bind="delegated"
    :class="cn(
      'body-sm text-muted-foreground',
      'data-[orientation=horizontal]:text-center',
      props.class,
    )"
  >
    <slot />
  </StepperDescription>
</template>
