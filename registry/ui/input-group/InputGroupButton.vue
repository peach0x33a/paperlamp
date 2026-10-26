<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { ButtonVariants } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<{
  variant?: ButtonVariants["variant"]
  size?: "sm" | "icon-sm" | "default"
  type?: "button" | "submit" | "reset"
  class?: HTMLAttributes["class"]
}>(), {
  variant: "ghost",
  size: "sm",
  type: "button",
})
</script>

<template>
  <Button
    data-slot="input-group-button"
    :type="type"
    :variant="variant"
    :size="size"
    :class="cn('h-7 gap-1.5 rounded-sm px-2 text-xs shadow-none', props.class)"
  >
    <slot />
  </Button>
</template>
