<script setup lang="ts">
import { ref } from "vue"
import { RatingInput } from "@/components/ui/rating"

const score = ref<number>()
const tiers = ["很差", "较差", "一般", "不错", "很好"]
</script>

<template>
  <div class="grid gap-3">
    <p class="body-sm text-muted-foreground">
      请为这个工具评分。
    </p>
    <RatingInput v-model="score" :labels="tiers" aria-label="给这个工具评分" />
  </div>
</template>
