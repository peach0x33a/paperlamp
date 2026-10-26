<script setup lang="ts">
import type { ProgressRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ProgressIndicator, ProgressRoot } from "reka-ui"
import { computed } from "vue"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<ProgressRootProps & { class?: HTMLAttributes["class"] }>(), {
  modelValue: 0,
  max: 100,
})
const delegated = reactiveOmit(props, "class")
const percent = computed(() => Math.min(100, Math.max(0, ((props.modelValue ?? 0) / props.max) * 100)))
</script>

<template>
  <ProgressRoot
    data-slot="progress"
    v-bind="delegated"
    :class="cn('relative h-1.5 w-full overflow-hidden rounded-full bg-muted', props.class)"
  >
    <ProgressIndicator
      data-slot="progress-indicator"
      class="size-full flex-1 rounded-full bg-primary transition-transform duration-300 ease-quiet"
      :style="`transform: translateX(-${100 - percent}%);`"
    />
  </ProgressRoot>
</template>
