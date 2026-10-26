<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { LoaderCircle } from "lucide-vue-next"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<{
  label?: string
  class?: HTMLAttributes["class"]
}>(), {
  label: "加载中",
})
</script>

<template>
  <LoaderCircle
    data-slot="spinner"
    role="status"
    :aria-label="label"
    :class="cn('size-4 animate-spin', props.class)"
  />
</template>
