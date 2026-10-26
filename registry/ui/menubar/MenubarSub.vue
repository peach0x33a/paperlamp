<script setup lang="ts">
import type { MenubarSubEmits, MenubarSubProps } from "reka-ui"
import { MenubarSub, useForwardPropsEmits } from "reka-ui"
import { reactiveOmit } from "@vueuse/core"

const props = defineProps<MenubarSubProps>()
const emits = defineEmits<MenubarSubEmits>()
const forwarded = useForwardPropsEmits(reactiveOmit(props), emits)
</script>

<template>
  <MenubarSub v-bind="forwarded">
    <slot />
  </MenubarSub>
</template>
