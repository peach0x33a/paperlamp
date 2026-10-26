<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ItemVariants } from "."
import { Primitive } from "reka-ui"
import { cn } from "@/lib/utils"
import { itemVariants } from "."

interface Props extends PrimitiveProps {
  variant?: ItemVariants["variant"]
  size?: ItemVariants["size"]
  class?: HTMLAttributes["class"]
}

const props = withDefaults(defineProps<Props>(), {
  as: "div",
})
</script>

<template>
  <Primitive
    data-slot="item"
    :data-variant="variant ?? 'default'"
    :data-size="size ?? 'default'"
    :as="as"
    :as-child="asChild"
    :class="cn(itemVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
