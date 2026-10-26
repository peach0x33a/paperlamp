<script setup lang="ts">
import { VisAxis, VisGroupedBar, VisGroupedBarSelectors, VisTooltip, VisXYContainer } from "@unovis/vue"
import type { ChartConfig } from "@/components/ui/chart"
import { ChartContainer, ChartTooltipContent, componentToString } from "@/components/ui/chart"

interface Bucket {
  stars: number
  count: number
}

/** 示例数据：虚构的一组评分，只用于演示分布图的样子。 */
const data: Bucket[] = [
  { stars: 1, count: 2 },
  { stars: 2, count: 4 },
  { stars: 3, count: 9 },
  { stars: 4, count: 14 },
  { stars: 5, count: 7 },
]

const config = {
  count: { label: "票数", color: "var(--rating)" },
} satisfies ChartConfig

const x = (d: Bucket) => d.stars
const y = (d: Bucket) => d.count
</script>

<template>
  <div class="w-full max-w-2xl space-y-4">
    <p class="font-mono label-xs text-muted-foreground">
      示例数据 · 1–5 星评分分布（虚构票数）
    </p>
    <ChartContainer :config="config" class="aspect-auto h-64">
      <VisXYContainer :data="data" :height="256">
        <VisGroupedBar :x="x" :y="y" color="var(--color-count)" :bar-padding="0.3" :rounded-corners="2" />
        <VisAxis type="x" :tick-format="(t: number) => `${t} 星`" :num-ticks="data.length" />
        <VisAxis type="y" :num-ticks="4" />
        <VisTooltip
          :triggers="{
            [VisGroupedBarSelectors.bar]: (bucket: Bucket) => componentToString(ChartTooltipContent, {
              config,
              title: `${bucket.stars} 星`,
              items: [{ key: 'count', value: bucket.count }],
            }),
          }"
        />
      </VisXYContainer>
    </ChartContainer>
  </div>
</template>
