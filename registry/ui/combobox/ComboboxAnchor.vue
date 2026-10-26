<script setup lang="ts">
import type { ComboboxAnchorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ComboboxAnchor, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<ComboboxAnchorProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <ComboboxAnchor
    data-slot="combobox-anchor"
    v-bind="forwardedProps"
    :class="cn(
      'flex h-9 w-full min-w-0 items-center gap-1 rounded-sm border bg-background px-3 text-sm text-foreground',
      'transition-[border-color] duration-150 ease-quiet',
      'focus-within:border-foreground',
      'has-[[aria-invalid=true]]:border-destructive',
      'has-disabled:cursor-not-allowed has-disabled:opacity-50',
      props.class,
    )"
  >
    <slot />
  </ComboboxAnchor>
</template>
