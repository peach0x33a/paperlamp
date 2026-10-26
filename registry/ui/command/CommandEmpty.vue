<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { injectCommand } from "./context"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
const { hasVisibleItems } = injectCommand()
</script>

<template>
  <div
    v-if="!hasVisibleItems"
    data-slot="command-empty"
    role="status"
    :class="cn('py-6 text-center text-sm text-muted-foreground', props.class)"
  >
    <slot />
  </div>
</template>
