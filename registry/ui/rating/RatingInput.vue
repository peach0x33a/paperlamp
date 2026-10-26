<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { Star } from "lucide-vue-next"
import { RadioGroupItem, RadioGroupRoot } from "reka-ui"
import { computed, ref } from "vue"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<{
  max?: number
  /** Optional tier names, one per star (e.g. 拉 / NPC / 人上人 / 顶级 / 夯). */
  labels?: string[]
  name?: string
  required?: boolean
  disabled?: boolean
  showScore?: boolean
  class?: HTMLAttributes["class"]
}>(), {
  max: 5,
  showScore: true,
})
const model = defineModel<number>()

const hovered = ref<number | null>(null)
const active = computed(() => hovered.value ?? model.value ?? 0)

function label(i: number) {
  const tier = props.labels?.[i - 1]
  return tier ? `${i} 星 · ${tier}` : `${i} 星`
}
function hover(i: number | null) {
  if (!props.disabled)
    hovered.value = i
}
</script>

<template>
  <RadioGroupRoot
    data-slot="rating-input"
    orientation="horizontal"
    :model-value="model"
    :name="name"
    :required="required"
    :disabled="disabled"
    :class="cn('inline-flex items-center gap-3 data-[disabled]:opacity-50', props.class)"
    @update:model-value="(v) => (model = Number(v))"
  >
    <div class="flex items-center gap-1" @pointerleave="hover(null)">
      <!-- Scale is sanctioned here only: 1.1 for the selected star, 1.25 for the hovered one. -->
      <RadioGroupItem
        v-for="i in max"
        :key="i"
        :value="i"
        :aria-label="label(i)"
        data-slot="rating-input-item"
        class="rounded-sm transition-transform duration-150 ease-quiet outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed"
        :class="hovered === i ? 'scale-125' : model === i ? 'scale-110' : ''"
        @pointerenter="hover(i)"
      >
        <Star
          class="size-8 transition-colors duration-150 ease-quiet"
          :class="i <= active ? 'fill-current text-rating' : 'text-muted-foreground/40'"
        />
      </RadioGroupItem>
    </div>
    <span v-if="showScore" data-slot="rating-score" class="inline-flex items-baseline gap-2 label-md tabular-nums" aria-hidden="true">
      <span>
        <span v-if="!active" class="text-muted-foreground">未评分</span>
        <template v-else>
          <span class="text-foreground">{{ active }}</span>
          <span class="text-muted-foreground"> / {{ max }}</span>
        </template>
      </span>
      <span v-if="labels && active" class="text-muted-foreground">{{ labels[active - 1] }}</span>
    </span>
  </RadioGroupRoot>
</template>
