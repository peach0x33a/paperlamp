<script setup lang="ts">
import type { ComboboxItemIndicatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { Check } from "lucide-vue-next"
import { ComboboxItemIndicator, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<ComboboxItemIndicatorProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <span class="absolute right-2 flex size-3.5 items-center justify-center">
    <ComboboxItemIndicator
      data-slot="combobox-item-indicator"
      v-bind="forwardedProps"
      :class="cn('flex items-center justify-center', props.class)"
    >
      <slot>
        <Check class="size-4" />
      </slot>
    </ComboboxItemIndicator>
  </span>
</template>
