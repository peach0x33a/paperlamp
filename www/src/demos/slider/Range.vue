<script setup lang="ts">
import { ref } from "vue"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const range = ref([2, 4])
</script>

<template>
  <div class="grid w-full max-w-sm gap-3">
    <div class="flex items-baseline justify-between">
      <Label for="rating-range">评分区间</Label>
      <span class="label-sm text-muted-foreground">{{ range[0] }} 到 {{ range[1] }} 星</span>
    </div>
    <Slider id="rating-range" v-model="range" :min="1" :max="5" :step="1" :min-steps-between-thumbs="1" aria-label="评分区间" />
  </div>
</template>
