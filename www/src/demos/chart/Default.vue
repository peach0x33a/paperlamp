<script setup lang="ts">
import { VisAxis, VisStackedBar, VisStackedBarSelectors, VisTooltip, VisXYContainer } from "@unovis/vue"
import type { ChartConfig } from "@/components/ui/chart"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltipContent,
  componentToString,
} from "@/components/ui/chart"

interface Week {
  week: number
  label: string
  图像: number
  文字: number
  办公: number
}

/** 示例数据：虚构的每周新增工具数量，与任何真实统计无关。 */
const data: Week[] = [
  { week: 0, label: "9/7", 图像: 3, 文字: 2, 办公: 1 },
  { week: 1, label: "9/14", 图像: 4, 文字: 1, 办公: 2 },
  { week: 2, label: "9/21", 图像: 2, 文字: 3, 办公: 2 },
  { week: 3, label: "9/28", 图像: 5, 文字: 2, 办公: 1 },
  { week: 4, label: "10/5", 图像: 3, 文字: 4, 办公: 3 },
  { week: 5, label: "10/12", 图像: 6, 文字: 2, 办公: 2 },
  { week: 6, label: "10/19", 图像: 4, 文字: 3, 办公: 4 },
]

const config = {
  图像: { label: "图像", color: "var(--foreground)" },
  文字: { label: "文字", color: "var(--indigo)" },
  办公: { label: "办公", color: "var(--warning)" },
} satisfies ChartConfig

const keys = Object.keys(config) as (keyof typeof config)[]
const x = (d: Week) => d.week
const ys = keys.map((k) => (d: Week) => d[k])
const colors = keys.map((k) => `var(--color-${k})`)
</script>

<template>
  <div class="w-full max-w-2xl space-y-4">
    <p class="font-mono label-xs text-muted-foreground">
      示例数据 · 每周新增工具数（按标签）
    </p>
    <ChartContainer :config="config" class="aspect-auto gap-4">
      <VisXYContainer :data="data" :height="288">
        <VisStackedBar
          :x="x"
          :y="ys"
          :color="colors"
          :bar-padding="0.4"
          :rounded-corners="2"
        />
        <VisAxis
          type="x"
          label=""
          :tick-format="(t: number) => data[t]?.label ?? ''"
          :num-ticks="data.length"
        />
        <VisAxis type="y" :num-ticks="4" />
        <VisTooltip
          :triggers="{
            [VisStackedBarSelectors.bar]: (wrapped: { datum: Week }) => componentToString(ChartTooltipContent, {
              config,
              title: `${wrapped.datum.label} 当周`,
              items: keys.map((k) => ({ key: k, value: wrapped.datum[k] })),
            }),
          }"
        />
      </VisXYContainer>
      <ChartLegend>
        <ChartLegendContent />
      </ChartLegend>
    </ChartContainer>
  </div>
</template>
