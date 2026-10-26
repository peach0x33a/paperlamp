<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { DrawerOverlay } from "vaul-vue"
import { cn } from "@/lib/utils"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
</script>

<template>
  <!-- Vaul animates the overlay fade via data-state; we only supply the scrim. -->
  <DrawerOverlay
    data-slot="drawer-overlay"
    :class="cn('fixed inset-0 z-60 bg-overlay backdrop-blur-sm', props.class)"
  />
</template>
