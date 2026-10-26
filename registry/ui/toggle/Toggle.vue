<script setup lang="ts">
import type { ToggleEmits, ToggleProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ToggleVariants } from "."
import { reactiveOmit } from "@vueuse/core"
import { Toggle, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"
import { toggleVariants } from "."

const props = withDefaults(defineProps<ToggleProps & {
  variant?: ToggleVariants["variant"]
  size?: ToggleVariants["size"]
  class?: HTMLAttributes["class"]
}>(), {
  variant: "default",
  size: "default",
})
const emits = defineEmits<ToggleEmits>()
const delegated = reactiveOmit(props, "class", "variant", "size")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <Toggle
    data-slot="toggle"
    v-bind="forwarded"
    :class="cn(toggleVariants({ variant, size }), props.class)"
  >
    <slot />
  </Toggle>
</template>
