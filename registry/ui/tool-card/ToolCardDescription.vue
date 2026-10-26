<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <p
    data-slot="tool-card-description"
    :class="cn('line-clamp-2 body-sm text-muted-foreground', props.class)"
  >
    <slot />
  </p>
</template>
