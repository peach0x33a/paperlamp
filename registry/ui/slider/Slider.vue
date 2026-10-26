<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { SliderRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"
import SliderRange from "./SliderRange.vue"
import SliderThumb from "./SliderThumb.vue"
import SliderTrack from "./SliderTrack.vue"

const props = defineProps<SliderRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<SliderRootEmits>()
const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <SliderRoot
    data-slot="slider"
    v-bind="forwarded"
    :class="cn(
      'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',
      'data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
      props.class,
    )"
  >
    <!-- Track, range and one thumb per value; pass your own parts through the slot to customise. -->
    <template #default="{ modelValue }">
      <slot :model-value="modelValue">
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb v-for="(_, i) in modelValue" :key="i" />
      </slot>
    </template>
  </SliderRoot>
</template>
