<script setup lang="ts">
import type { ToggleGroupRootEmits, ToggleGroupRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ToggleVariants } from "@/components/ui/toggle"
import { reactiveOmit } from "@vueuse/core"
import { ToggleGroupRoot, useForwardPropsEmits } from "reka-ui"
import { provide } from "vue"
import { cn } from "@/lib/utils"
import { TOGGLE_GROUP_CONTEXT } from "."

const props = withDefaults(defineProps<ToggleGroupRootProps & {
  variant?: ToggleVariants["variant"]
  size?: ToggleVariants["size"]
  class?: HTMLAttributes["class"]
}>(), {
  variant: "default",
  size: "default",
})
const emits = defineEmits<ToggleGroupRootEmits>()
const delegated = reactiveOmit(props, "class", "variant", "size")
const forwarded = useForwardPropsEmits(delegated, emits)

provide(TOGGLE_GROUP_CONTEXT, {
  variant: () => props.variant,
  size: () => props.size,
})
</script>

<template>
  <ToggleGroupRoot
    data-slot="toggle-group"
    v-bind="forwarded"
    :class="cn('group/toggle-group flex w-fit items-center gap-1 rounded-sm', props.class)"
  >
    <slot />
  </ToggleGroupRoot>
</template>
