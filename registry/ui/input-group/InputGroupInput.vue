<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { useVModel } from "@vueuse/core"
import { cn } from "@/lib/utils"

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes["class"]
}>()

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void
}>()

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input
    v-model="modelValue"
    data-slot="input-group-control"
    :class="cn(
      'flex h-9 min-w-0 flex-1 rounded-none border-0 bg-transparent px-3 py-2 text-sm text-foreground shadow-none outline-none',
      'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground',
      'disabled:cursor-not-allowed',
      props.class,
    )"
  >
</template>
