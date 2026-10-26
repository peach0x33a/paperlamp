<script setup lang="ts">
import { DrawerRoot } from "vaul-vue"
</script>

<template>
  <!-- Attrs (open, defaultOpen, direction, onUpdate:open…) fall through to DrawerRoot. -->
  <DrawerRoot :should-scale-background="false">
    <slot />
  </DrawerRoot>
</template>
