<script setup lang="ts">
import { ref } from "vue"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const minStars = ref([3])
</script>

<template>
  <div class="grid w-full max-w-sm gap-3">
    <div class="flex items-baseline justify-between">
      <Label for="min-stars">最低评分</Label>
      <span class="label-sm text-muted-foreground">至少 {{ minStars[0] }} 星</span>
    </div>
    <Slider id="min-stars" v-model="minStars" :min="1" :max="5" :step="1" aria-label="最低评分" />
  </div>
</template>
