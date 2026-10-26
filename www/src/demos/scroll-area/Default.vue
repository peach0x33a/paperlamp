<script setup lang="ts">
import { ScrollArea } from "@/components/ui/scroll-area"

const entries = [
  ["2026-10-18", "新增「作息提醒」：每晚自动提醒。"],
  ["2026-10-12", "猫名字典支持一次生成二十个名字。"],
  ["2026-10-02", "俳句时钟的文案改成更短的版本。"],
  ["2026-09-30", "会议废话检测加上了废话浓度。"],
  ["2026-09-21", "古诗接龙可以认输了。"],
  ["2026-09-08", "修复 Canvas 在深色模式下的边框颜色。"],
  ["2026-08-27", "首次上线：小游戏和一个生成器。"],
]
</script>

<template>
  <ScrollArea class="h-64 w-full max-w-sm rounded-md border bg-card p-4">
    <ol class="grid gap-4">
      <li v-for="[date, text] in entries" :key="date" class="grid gap-1">
        <span class="font-mono label-sm text-muted-foreground">{{ date }}</span>
        <span class="body-sm">{{ text }}</span>
      </li>
    </ol>
  </ScrollArea>
</template>
