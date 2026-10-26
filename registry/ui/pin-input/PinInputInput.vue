<script setup lang="ts">
import type { PinInputInputProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { PinInputInput, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<PinInputInputProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PinInputInput
    data-slot="pin-input-input"
    v-bind="forwardedProps"
    :class="cn(
      'size-9 min-w-0 rounded-sm border bg-background text-center font-mono tabular-nums text-sm text-foreground outline-none',
      'transition-[border-color] duration-150 ease-quiet',
      'focus-visible:border-foreground',
      'aria-invalid:border-destructive',
      'placeholder:text-muted-foreground',
      'disabled:cursor-not-allowed disabled:opacity-50',
      props.class,
    )"
  />
</template>
