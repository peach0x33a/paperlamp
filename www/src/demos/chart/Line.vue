<script setup lang="ts">
import { VisAxis, VisCrosshair, VisLine, VisTooltip, VisXYContainer } from "@unovis/vue"
import type { ChartConfig } from "@/components/ui/chart"
import { ChartContainer, ChartTooltipContent, componentToString } from "@/components/ui/chart"

interface Point {
  week: number
  label: string
  rating: number
}

/** 示例数据：虚构工具「古诗接龙」的周平均评分，并非真实数据。 */
const data: Point[] = [
  { week: 0, label: "9/7", rating: 3.8 },
  { week: 1, label: "9/14", rating: 3.6 },
  { week: 2, label: "9/21", rating: 3.4 },
  { week: 3, label: "9/28", rating: 3.7 },
  { week: 4, label: "10/5", rating: 4.0 },
  { week: 5, label: "10/12", rating: 4.1 },
  { week: 6, label: "10/19", rating: 4.2 },
]

const config = {
  rating: { label: "评分", color: "var(--rating)" },
} satisfies ChartConfig

const x = (d: Point) => d.week
const y = (d: Point) => d.rating
</script>

<template>
  <div class="w-full max-w-2xl space-y-4">
    <p class="font-mono label-xs text-muted-foreground">
      示例数据 · 「古诗接龙」每周平均评分（1–5）
    </p>
    <ChartContainer :config="config" class="aspect-auto h-64">
      <VisXYContainer :data="data" :height="256" :y-domain="[1, 5]">
        <VisLine :x="x" :y="y" color="var(--color-rating)" :line-width="2" />
        <VisAxis type="x" :tick-format="(t: number) => data[t]?.label ?? ''" :num-ticks="data.length" />
        <VisAxis type="y" :num-ticks="4" />
        <VisCrosshair
          :x="x"
          :y="y"
          :template="(d: Point) => componentToString(ChartTooltipContent, {
            config,
            title: `${d.label} 当周`,
            items: [{ key: 'rating', value: d.rating.toFixed(1) }],
          })"
          :color="'var(--color-rating)'"
        />
        <VisTooltip />
      </VisXYContainer>
    </ChartContainer>
  </div>
</template>
