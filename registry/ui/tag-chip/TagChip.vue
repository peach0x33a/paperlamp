<script setup lang="ts">
import type { ToggleEmits, ToggleProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { TagChipVariants } from "."
import { reactiveOmit } from "@vueuse/core"
import { Toggle, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"
import { tagChipVariants } from "."

const props = defineProps<ToggleProps & {
  size?: TagChipVariants["size"]
  class?: HTMLAttributes["class"]
}>()
const emits = defineEmits<ToggleEmits>()
const delegated = reactiveOmit(props, "class", "size")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <!-- A real <button aria-pressed> so the focus-visible inversion is reachable by keyboard. -->
  <Toggle
    v-slot="slotProps"
    data-slot="tag-chip"
    v-bind="forwarded"
    :class="cn(tagChipVariants({ size }), props.class)"
  >
    <slot v-bind="slotProps" />
  </Toggle>
</template>
