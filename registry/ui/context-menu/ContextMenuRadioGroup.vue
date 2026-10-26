<script setup lang="ts">
import type { ContextMenuRadioGroupEmits, ContextMenuRadioGroupProps } from "reka-ui"
import { reactiveOmit } from "@vueuse/core"
import { ContextMenuRadioGroup, useForwardPropsEmits } from "reka-ui"

const props = defineProps<ContextMenuRadioGroupProps>()
const emits = defineEmits<ContextMenuRadioGroupEmits>()
const forwarded = useForwardPropsEmits(reactiveOmit(props), emits)
</script>

<template>
  <ContextMenuRadioGroup data-slot="context-menu-radio-group" v-bind="forwarded">
    <slot />
  </ContextMenuRadioGroup>
</template>
