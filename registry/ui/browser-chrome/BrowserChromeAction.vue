<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<PrimitiveProps & { class?: HTMLAttributes["class"] }>(), {
  as: "button",
})
</script>

<template>
  <Primitive
    data-slot="browser-chrome-action"
    :as="as"
    :as-child="asChild"
    :type="as === 'button' ? 'button' : undefined"
    :class="cn(
      'inline-flex size-7 shrink-0 items-center justify-center rounded-sm text-muted-foreground',
      'transition-[color,background-color] duration-150 ease-quiet hover:bg-accent hover:text-foreground',
      'outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      'disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-3.5',
      props.class,
    )"
  >
    <slot />
  </Primitive>
</template>
