<script setup lang="ts">
import { ref } from "vue"
import { RatingInput } from "@/components/ui/rating"

const score = ref<number>()
const tiers = ["拉", "NPC", "人上人", "顶级", "夯"]
</script>

<template>
  <div class="grid gap-3">
    <p class="body-sm text-muted-foreground">
      你觉得「猫名字典」怎么样？
    </p>
    <RatingInput v-model="score" :labels="tiers" aria-label="给这个工具评分" />
  </div>
</template>
