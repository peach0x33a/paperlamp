<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<{
  variant?: "legend" | "label"
  class?: HTMLAttributes["class"]
}>(), {
  variant: "legend",
})
</script>

<template>
  <legend
    data-slot="field-legend"
    :data-variant="variant"
    :class="cn(
      'mb-3 font-bold text-foreground',
      'data-[variant=legend]:title-md data-[variant=label]:text-sm data-[variant=label]:font-medium',
      props.class,
    )"
  >
    <slot />
  </legend>
</template>
