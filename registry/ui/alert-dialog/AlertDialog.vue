<script setup lang="ts">
import type { AlertDialogEmits, AlertDialogProps } from "reka-ui"
import { reactiveOmit } from "@vueuse/core"
import { AlertDialogRoot, useForwardPropsEmits } from "reka-ui"

const props = defineProps<AlertDialogProps>()
const emits = defineEmits<AlertDialogEmits>()
const forwarded = useForwardPropsEmits(reactiveOmit(props), emits)
</script>

<template>
  <AlertDialogRoot v-bind="forwarded">
    <slot />
  </AlertDialogRoot>
</template>
