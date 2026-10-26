<script setup lang="ts">
import type { DrawerPortalProps } from "vaul-vue"
import { DrawerPortal } from "vaul-vue"

const props = defineProps<DrawerPortalProps>()
</script>

<template>
  <DrawerPortal v-bind="props">
    <slot />
  </DrawerPortal>
</template>
