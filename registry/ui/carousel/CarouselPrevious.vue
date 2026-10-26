<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { ChevronLeft, ChevronUp } from "lucide-vue-next"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useCarousel } from "./context"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
const { orientation, canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <Button
    data-slot="carousel-previous"
    variant="outline"
    size="icon"
    :disabled="!canScrollPrev"
    :class="cn(
      'absolute size-8 rounded-full',
      orientation === 'horizontal' ? '-left-12 top-1/2 -translate-y-1/2' : '-top-12 left-1/2 -translate-x-1/2',
      props.class,
    )"
    @click="scrollPrev()"
  >
    <ChevronUp v-if="orientation === 'vertical'" />
    <ChevronLeft v-else />
    <span class="sr-only">上一张</span>
  </Button>
</template>
