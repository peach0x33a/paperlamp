<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { ChartConfig } from "./context"
import { computed, provide, ref } from "vue"
import { cn } from "@/lib/utils"
import { CHART_CONFIG_KEY, CHART_ELEMENT_KEY } from "./context"

const props = defineProps<{
  config: ChartConfig
  class?: HTMLAttributes["class"]
}>()

const element = ref<HTMLElement>()
const configRef = computed(() => props.config)
provide(CHART_CONFIG_KEY, configRef)
provide(CHART_ELEMENT_KEY, element)

/** Each config entry becomes `--color-<key>`, read by Unovis fills and the tooltip/legend dots. */
const style = computed(() => {
  const vars: Record<string, string> = {
    // Axis and grid text and lines, mapped onto Paperlamp tokens.
    "--vis-font-family": "var(--font-mono)",
    "--vis-axis-font-family": "var(--font-mono)",
    "--vis-axis-tick-color": "var(--muted-foreground)",
    "--vis-axis-grid-color": "var(--border)",
    "--vis-axis-domain-color": "var(--border)",
    "--vis-axis-tick-text-size": "11px",
    // Tooltip surface: popover panel, border, shadow-lg.
    "--vis-tooltip-background-color": "var(--popover)",
    "--vis-tooltip-text-color": "var(--popover-foreground)",
    "--vis-tooltip-border-color": "var(--border)",
    "--vis-tooltip-border-radius": "var(--radius-md)",
    "--vis-tooltip-shadow-color": "rgba(0, 0, 0, 0.1)",
    "--vis-tooltip-box-shadow": "var(--shadow-lg)",
  }
  for (const [key, item] of Object.entries(props.config)) {
    if (item.color) vars[`--color-${key}`] = item.color
  }
  return vars
})
</script>

<template>
  <div
    ref="element"
    data-slot="chart"
    :style="style"
    :class="cn('relative flex aspect-video w-full flex-col justify-center text-xs text-muted-foreground', props.class)"
  >
    <slot />
  </div>
</template>
