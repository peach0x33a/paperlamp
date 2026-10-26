<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from "@/lib/utils"
import { useChart } from "./context"

const props = defineProps<{
  /** Series keys to show, in order. Defaults to every key in the chart config. */
  keys?: string[]
  class?: HTMLAttributes["class"]
}>()

const { config } = useChart()
const items = computed(() =>
  (props.keys ?? Object.keys(config.value)).map((key) => ({
    key,
    label: config.value[key]?.label ?? key,
  })),
)
</script>

<template>
  <ul data-slot="chart-legend-content" :class="cn('flex flex-wrap items-center justify-center gap-4 font-mono label-xs text-muted-foreground', props.class)">
    <li v-for="item in items" :key="item.key" class="flex items-center gap-1.5">
      <span class="size-2.5 shrink-0 rounded-sm" :style="{ backgroundColor: `var(--color-${item.key})` }" />
      {{ item.label }}
    </li>
  </ul>
</template>
