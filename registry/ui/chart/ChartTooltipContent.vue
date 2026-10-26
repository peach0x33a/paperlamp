<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { ChartConfig } from "./context"
import { cn } from "@/lib/utils"

export interface ChartTooltipItem {
  key: string
  value: number | string
}

const props = defineProps<{
  config: ChartConfig
  title?: string
  items: ChartTooltipItem[]
  hideIndicator?: boolean
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="chart-tooltip-content"
    :class="cn('grid min-w-32 items-start gap-1.5 rounded-md border bg-popover px-2.5 py-1.5 text-xs text-popover-foreground shadow-lg', props.class)"
  >
    <div v-if="title" class="font-mono label-sm text-foreground">
      {{ title }}
    </div>
    <div
      v-for="item in items"
      :key="item.key"
      class="flex items-center justify-between gap-4"
    >
      <span class="flex items-center gap-1.5 text-muted-foreground">
        <span
          v-if="!hideIndicator"
          class="size-2.5 shrink-0 rounded-sm"
          :style="{ backgroundColor: `var(--color-${item.key})` }"
        />
        {{ config[item.key]?.label ?? item.key }}
      </span>
      <span class="font-mono tabular-nums text-foreground">{{ item.value }}</span>
    </div>
  </div>
</template>
