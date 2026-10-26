<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { useCarousel } from "./context"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
const { setViewport, orientation } = useCarousel()
</script>

<template>
  <div :ref="setViewport" data-slot="carousel-content" class="overflow-hidden">
    <div
      :class="cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', props.class)"
    >
      <slot />
    </div>
  </div>
</template>
