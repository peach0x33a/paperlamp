<script setup lang="ts">
import { RatingStars } from "@/components/ui/rating"

const rows = [
  { rank: "🥇", name: "像素小镇生成器", score: 4.8 },
  { rank: "🥈", name: "猫名字典", score: 4.5 },
  { rank: "🥉", name: "会议废话检测", score: 4.1 },
]
</script>

<template>
  <div class="w-full max-w-md overflow-hidden rounded-md border bg-card">
    <div v-for="row in rows" :key="row.name" class="flex items-center gap-3 border-b border-border/50 px-4 py-3 last:border-b-0">
      <span>{{ row.rank }}</span>
      <span class="flex-1 truncate font-bold">{{ row.name }}</span>
      <RatingStars variant="dot" :value="row.score" />
    </div>
  </div>
</template>
