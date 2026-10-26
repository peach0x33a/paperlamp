<script setup lang="ts">
import { Progress } from "@/components/ui/progress"

const steps = [
  { label: "读取评论", value: 100 },
  { label: "提炼观点", value: 58 },
  { label: "写总结", value: 0 },
]
</script>

<template>
  <div class="grid w-80 gap-4">
    <div v-for="step in steps" :key="step.label" class="grid gap-1.5">
      <div class="flex items-baseline justify-between body-sm">
        <span>{{ step.label }}</span>
        <span class="label-sm tabular-nums text-muted-foreground">{{ step.value }}%</span>
      </div>
      <Progress :model-value="step.value" :aria-label="step.label" />
    </div>
  </div>
</template>
