<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
</script>

<template>
  <span data-slot="command-shortcut" :class="cn('ml-auto font-mono label-sm text-muted-foreground', props.class)">
    <slot />
  </span>
</template>
