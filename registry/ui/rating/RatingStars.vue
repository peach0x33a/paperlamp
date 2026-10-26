<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { Star } from "lucide-vue-next"
import { computed } from "vue"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<{
  value?: number | null
  max?: number
  /** `star` for cards and detail headers, `dot` for leaderboard rows. */
  variant?: "star" | "dot"
  /** Gold alone measures 1.53:1 — keep the mono score unless it is rendered elsewhere. */
  showScore?: boolean
  class?: HTMLAttributes["class"]
}>(), {
  value: null,
  max: 5,
  variant: "star",
  showScore: true,
})

const filled = computed(() => Math.round(props.value ?? 0))
const score = computed(() => (props.value == null ? "--" : props.value.toFixed(1)))
</script>

<template>
  <span
    data-slot="rating-stars"
    role="img"
    :aria-label="props.value == null ? '暂无评分' : `评分 ${score} / ${max}`"
    :class="cn('inline-flex items-center gap-1.5', props.class)"
  >
    <span class="flex items-center gap-0.5" aria-hidden="true">
      <template v-for="i in max" :key="i">
        <Star
          v-if="variant === 'star'"
          class="size-3 shrink-0 fill-current"
          :class="i <= filled ? 'text-rating' : 'text-muted-foreground/25'"
        />
        <span
          v-else
          class="size-2 shrink-0 rounded-full"
          :class="i <= filled ? 'bg-rating' : 'bg-muted-foreground/25'"
        />
      </template>
    </span>
    <span v-if="showScore" data-slot="rating-score" class="label-sm tabular-nums text-muted-foreground" aria-hidden="true">
      {{ score }}
    </span>
  </span>
</template>
