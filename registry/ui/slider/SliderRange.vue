<script setup lang="ts">
import type { SliderRangeProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { SliderRange } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<SliderRangeProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <SliderRange
    data-slot="slider-range"
    v-bind="delegated"
    :class="cn(
      'absolute rounded-full bg-primary',
      'data-[orientation=horizontal]:h-full',
      'data-[orientation=vertical]:w-full',
      props.class,
    )"
  />
</template>
