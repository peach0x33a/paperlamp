<script setup lang="ts">
import type { ComboboxEmptyProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ComboboxEmpty, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<ComboboxEmptyProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <ComboboxEmpty
    data-slot="combobox-empty"
    v-bind="forwardedProps"
    :class="cn('py-6 text-center body-sm text-muted-foreground', props.class)"
  >
    <slot />
  </ComboboxEmpty>
</template>
