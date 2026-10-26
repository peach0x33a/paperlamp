<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const props = defineProps<{ class?: HTMLAttributes["class"], modelValue?: string | number, defaultValue?: string | number }>()
const emits = defineEmits<{ "update:modelValue": [value: string | number] }>()
</script>

<template>
  <Input
    data-slot="sidebar-input"
    data-sidebar="input"
    :model-value="modelValue"
    :default-value="defaultValue"
    :class="cn('h-8 w-full bg-background shadow-none', props.class)"
    @update:model-value="(v: string | number) => emits('update:modelValue', v)"
  />
</template>
