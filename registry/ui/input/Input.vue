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
    data-slot="input"
    :class="cn(
      'flex h-9 w-full min-w-0 rounded-sm border bg-background px-3 py-2 text-sm text-foreground',
      'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground',
      'transition-[border-color] duration-150 ease-quiet outline-none',
      'focus-visible:border-foreground',
      'aria-invalid:border-destructive',
      'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
      'file:inline-flex file:h-5 file:border-0 file:bg-transparent file:font-mono file:text-xs file:font-medium file:text-foreground',
      props.class,
    )"
  >
</template>
