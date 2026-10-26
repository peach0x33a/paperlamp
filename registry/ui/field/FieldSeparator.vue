<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="field-separator"
    :class="cn('relative -my-2 flex h-5 items-center text-sm', props.class)"
  >
    <Separator class="absolute inset-0 top-1/2" />
    <span
      v-if="$slots.default"
      data-slot="field-separator-content"
      class="relative mx-auto block w-fit bg-background px-2 text-muted-foreground"
    >
      <slot />
    </span>
  </div>
</template>
