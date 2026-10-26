<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { ButtonGroupVariants } from "."
import { cn } from "@/lib/utils"
import { buttonGroupVariants } from "."

const props = withDefaults(defineProps<{
  orientation?: ButtonGroupVariants["orientation"]
  class?: HTMLAttributes["class"]
}>(), {
  orientation: "horizontal",
})
</script>

<template>
  <div
    role="group"
    data-slot="button-group"
    :data-orientation="orientation"
    :class="cn(buttonGroupVariants({ orientation }), props.class)"
  >
    <slot />
  </div>
</template>
