<script setup lang="ts">
import type { ComboboxInputEmits, ComboboxInputProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ComboboxInput, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<ComboboxInputProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<ComboboxInputEmits>()

const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxInput
    data-slot="combobox-input"
    v-bind="forwarded"
    :class="cn(
      'h-full min-w-0 flex-1 bg-transparent py-2 text-sm text-foreground outline-none',
      'placeholder:text-muted-foreground',
      'disabled:cursor-not-allowed',
      props.class,
    )"
  >
    <slot />
  </ComboboxInput>
</template>
