<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<PrimitiveProps & { class?: HTMLAttributes["class"] }>(), {
  as: "article",
})
</script>

<template>
  <!-- The system's one composite hover: indigo border, 4px lift, shadow-xl, 300ms. -->
  <Primitive
    data-slot="tool-card"
    :as="as"
    :as-child="asChild"
    :class="cn(
      'group/tool-card relative flex flex-col gap-3 rounded-md border bg-card p-6 text-card-foreground',
      'transition-[translate,box-shadow,border-color] duration-300 ease-quiet',
      'hover:-translate-y-1 hover:border-indigo hover:shadow-xl',
      'outline-none focus-visible:-translate-y-1 focus-visible:border-indigo focus-visible:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      props.class,
    )"
  >
    <slot />
  </Primitive>
</template>
