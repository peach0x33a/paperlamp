<script setup lang="ts">
import type { ComboboxLabelProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ComboboxLabel, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<ComboboxLabelProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <ComboboxLabel
    data-slot="combobox-label"
    v-bind="forwardedProps"
    :class="cn('px-2 py-1.5 label-sm text-muted-foreground', props.class)"
  >
    <slot />
  </ComboboxLabel>
</template>
