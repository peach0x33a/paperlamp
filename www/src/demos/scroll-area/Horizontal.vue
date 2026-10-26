<script setup lang="ts">
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const tags = ["Canvas", "文字", "音频", "小游戏", "本地运行", "整活", "学习", "效率", "图像"]
</script>

<template>
  <ScrollArea class="w-full max-w-sm whitespace-nowrap rounded-md border bg-card p-4">
    <div class="flex gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="rounded-full border px-3 py-0.5 font-mono label-sm text-muted-foreground"
      >{{ tag }}</span>
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
</template>
