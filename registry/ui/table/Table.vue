<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
</script>

<template>
  <div data-slot="table-container" class="relative w-full overflow-x-auto rounded-md border bg-card">
    <table
      data-slot="table"
      :class="cn('w-full caption-bottom text-sm text-foreground', props.class)"
    >
      <slot />
    </table>
  </div>
</template>
