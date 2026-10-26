<script setup lang="ts">
import type { StepperIndicatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { StepperIndicator } from "reka-ui"
import { Check } from "lucide-vue-next"
import { cn } from "@/lib/utils"

const props = defineProps<StepperIndicatorProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <StepperIndicator
    v-slot="{ step }"
    data-slot="stepper-indicator"
    v-bind="delegated"
    :class="cn(
      'flex size-8 shrink-0 items-center justify-center rounded-full border font-mono text-sm font-medium',
      'transition-[color,background-color,border-color] duration-150 ease-quiet',
      'border-muted-foreground/80 bg-background text-muted-foreground',
      'group-data-[state=active]/step:border-foreground group-data-[state=active]/step:text-foreground',
      'group-data-[state=completed]/step:border-foreground group-data-[state=completed]/step:bg-foreground group-data-[state=completed]/step:text-background',
      props.class,
    )"
  >
    <slot :step="step">
      <span class="group-data-[state=completed]/step:hidden">{{ step }}</span>
      <Check class="hidden size-4 group-data-[state=completed]/step:block" aria-hidden="true" />
    </slot>
  </StepperIndicator>
</template>
