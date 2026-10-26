<script setup lang="ts">
import type { ContextMenuSubEmits, ContextMenuSubProps } from "reka-ui"
import { reactiveOmit } from "@vueuse/core"
import { ContextMenuSub, useForwardPropsEmits } from "reka-ui"

const props = defineProps<ContextMenuSubProps>()
const emits = defineEmits<ContextMenuSubEmits>()
const forwarded = useForwardPropsEmits(reactiveOmit(props), emits)
</script>

<template>
  <ContextMenuSub v-bind="forwarded">
    <slot />
  </ContextMenuSub>
</template>
