<script setup lang="ts">
import type { SliderThumbProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { SliderThumb } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<SliderThumbProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <SliderThumb
    data-slot="slider-thumb"
    v-bind="delegated"
    :class="cn(
      'block size-4 shrink-0 rounded-full border border-primary bg-background shadow-sm outline-none',
      'transition-[color,border-color] duration-150 ease-quiet',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      'disabled:pointer-events-none disabled:opacity-50',
      props.class,
    )"
  />
</template>
