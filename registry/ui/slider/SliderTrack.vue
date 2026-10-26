<script setup lang="ts">
import type { SliderTrackProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { SliderTrack } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<SliderTrackProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <SliderTrack
    data-slot="slider-track"
    v-bind="delegated"
    :class="cn(
      'relative grow overflow-hidden rounded-full bg-border',
      'data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full',
      'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5',
      props.class,
    )"
  >
    <slot />
  </SliderTrack>
</template>
