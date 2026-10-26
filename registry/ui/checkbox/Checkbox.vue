<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { Check, Minus } from "lucide-vue-next"
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<CheckboxRootEmits>()
const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <CheckboxRoot
    v-slot="{ modelValue }"
    data-slot="checkbox"
    v-bind="forwarded"
    :class="cn(
      'peer inline-flex size-4 shrink-0 items-center justify-center rounded-sm border border-muted-foreground/80 bg-background text-primary-foreground outline-none',
      'transition-[color,background-color,border-color] duration-150 ease-quiet',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      'data-[state=checked]:border-primary data-[state=checked]:bg-primary',
      'data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary',
      'aria-invalid:border-destructive',
      'disabled:cursor-not-allowed disabled:opacity-50',
      props.class,
    )"
  >
    <CheckboxIndicator class="flex items-center justify-center text-current">
      <Minus v-if="modelValue === 'indeterminate'" class="size-3.5" aria-hidden="true" />
      <Check v-else class="size-3.5" aria-hidden="true" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
