<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const props = withDefaults(defineProps<{
  orientation?: "horizontal" | "vertical"
  class?: HTMLAttributes["class"]
}>(), {
  orientation: "vertical",
})
</script>

<template>
  <Separator
    data-slot="button-group-separator"
    :orientation="orientation"
    decorative
    :class="cn(
      'relative shrink-0 self-stretch bg-border',
      'data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-px',
      'data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-auto',
      props.class,
    )"
  />
</template>
