<script setup lang="ts">
import type { StepperRootEmits, StepperRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { StepperRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<StepperRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<StepperRootEmits>()
const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <StepperRoot
    data-slot="stepper"
    v-bind="forwarded"
    :class="cn(
      'flex w-full gap-2 data-[orientation=horizontal]:items-start data-[orientation=vertical]:flex-col',
      props.class,
    )"
  >
    <slot />
  </StepperRoot>
</template>
