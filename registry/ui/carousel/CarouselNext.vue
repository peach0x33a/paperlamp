<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { ChevronDown, ChevronRight } from "lucide-vue-next"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useCarousel } from "./context"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <Button
    data-slot="carousel-next"
    variant="outline"
    size="icon"
    :disabled="!canScrollNext"
    :class="cn(
      'absolute size-8 rounded-full',
      orientation === 'horizontal' ? '-right-12 top-1/2 -translate-y-1/2' : '-bottom-12 left-1/2 -translate-x-1/2',
      props.class,
    )"
    @click="scrollNext()"
  >
    <ChevronDown v-if="orientation === 'vertical'" />
    <ChevronRight v-else />
    <span class="sr-only">下一张</span>
  </Button>
</template>
