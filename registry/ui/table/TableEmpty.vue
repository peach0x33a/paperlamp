<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<{
  /** Number of columns the empty message spans. */
  colspan?: number
  class?: HTMLAttributes["class"]
}>(), {
  colspan: 1,
})
</script>

<template>
  <tr data-slot="table-empty" class="border-b-0">
    <td :colspan="colspan" :class="cn('px-4 py-12 text-center body-sm text-muted-foreground', props.class)">
      <slot />
    </td>
  </tr>
</template>
