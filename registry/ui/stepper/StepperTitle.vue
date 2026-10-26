<script setup lang="ts">
import type { StepperTitleProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { StepperTitle } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<StepperTitleProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <StepperTitle
    data-slot="stepper-title"
    v-bind="delegated"
    :class="cn(
      'body-sm font-medium text-muted-foreground group-data-[state=active]/step:text-foreground group-data-[state=completed]/step:text-foreground',
      'data-[orientation=horizontal]:text-center',
      props.class,
    )"
  >
    <slot />
  </StepperTitle>
</template>
