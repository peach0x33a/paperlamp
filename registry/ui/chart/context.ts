import type { Ref } from "vue"
import { inject, ref } from "vue"

export interface ChartConfigItem {
  label?: string
  /** A CSS color, usually a token such as `var(--indigo)`. */
  color?: string
}

export type ChartConfig = Record<string, ChartConfigItem>

export const CHART_CONFIG_KEY = Symbol("chart-config")
export const CHART_ELEMENT_KEY = Symbol("chart-element")

export function useChart() {
  const config = inject<Ref<ChartConfig>>(CHART_CONFIG_KEY, () => ref<ChartConfig>({}), true)
  const element = inject<Ref<HTMLElement | undefined>>(CHART_ELEMENT_KEY, () => ref<HTMLElement>(), true)
  return { config, element }
}
