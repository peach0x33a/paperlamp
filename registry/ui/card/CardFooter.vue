<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { CardFooterVariants } from "."
import { cn } from "@/lib/utils"
import { cardFooterVariants } from "."

const props = defineProps<{
  variant?: CardFooterVariants["variant"]
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="card-footer"
    :data-variant="variant ?? 'default'"
    :class="cn(cardFooterVariants({ variant }), props.class)"
  >
    <slot />
  </div>
</template>
