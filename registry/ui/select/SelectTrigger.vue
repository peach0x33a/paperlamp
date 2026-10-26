<script setup lang="ts">
import type { SelectTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronDown } from "lucide-vue-next"
import { SelectIcon, SelectTrigger, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<SelectTriggerProps & {
  size?: "sm" | "default"
  class?: HTMLAttributes["class"]
}>()

const delegatedProps = reactiveOmit(props, "class", "size")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    data-slot="select-trigger"
    :data-size="size"
    v-bind="forwardedProps"
    :class="cn(
      'flex w-fit min-w-0 items-center justify-between gap-2 whitespace-nowrap rounded-sm border bg-background px-3 text-sm text-foreground',
      'h-9 data-[size=sm]:h-8 data-[size=sm]:text-xs',
      'data-[placeholder]:text-muted-foreground *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2',
      'transition-[border-color] duration-150 ease-quiet outline-none',
      'focus-visible:border-foreground',
      'aria-invalid:border-destructive',
      'disabled:cursor-not-allowed disabled:opacity-50',
      props.class,
    )"
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown class="size-4 text-muted-foreground" />
    </SelectIcon>
  </SelectTrigger>
</template>
