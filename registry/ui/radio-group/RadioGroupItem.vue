<script setup lang="ts">
import type { RadioGroupItemEmits, RadioGroupItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { RadioGroupIndicator, RadioGroupItem, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<RadioGroupItemProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<RadioGroupItemEmits>()
const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <RadioGroupItem
    data-slot="radio-group-item"
    v-bind="forwarded"
    :class="cn(
      'peer inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-muted-foreground/80 bg-background text-primary outline-none',
      'transition-[color,border-color] duration-150 ease-quiet',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      'data-[state=checked]:border-primary',
      'aria-invalid:border-destructive',
      'disabled:cursor-not-allowed disabled:opacity-50',
      props.class,
    )"
  >
    <RadioGroupIndicator class="flex items-center justify-center">
      <span class="size-2 rounded-full bg-primary" aria-hidden="true" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
