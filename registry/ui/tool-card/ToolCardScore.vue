<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { Star } from "lucide-vue-next"
import { cn } from "@/lib/utils"

const props = defineProps<{
  value?: number | null
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <span
    data-slot="tool-card-score"
    :aria-label="value == null ? '暂无评分' : `评分 ${value.toFixed(1)}`"
    :class="cn('inline-flex items-center gap-1 tabular-nums', props.class)"
  >
    <Star class="size-3 fill-current text-rating" aria-hidden="true" />
    <span aria-hidden="true">{{ value == null ? "--" : value.toFixed(1) }}</span>
  </span>
</template>
