<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
</script>

<template>
  <div
    data-slot="pin-input-separator"
    role="separator"
    aria-hidden="true"
    :class="cn('flex w-3 items-center justify-center font-mono text-muted-foreground', props.class)"
  >
    <span class="h-px w-2 bg-border" />
  </div>
</template>
