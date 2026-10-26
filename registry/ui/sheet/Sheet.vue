<script setup lang="ts">
import type { DialogRootEmits, DialogRootProps } from "reka-ui"
import { reactiveOmit } from "@vueuse/core"
import { DialogRoot, useForwardPropsEmits } from "reka-ui"

const props = defineProps<DialogRootProps>()
const emits = defineEmits<DialogRootEmits>()
const forwarded = useForwardPropsEmits(reactiveOmit(props), emits)
</script>

<template>
  <DialogRoot v-bind="forwarded">
    <slot />
  </DialogRoot>
</template>
