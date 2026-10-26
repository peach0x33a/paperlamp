<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <p
    data-slot="empty-description"
    :class="cn('body-sm text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-indigo', props.class)"
  >
    <slot />
  </p>
</template>
