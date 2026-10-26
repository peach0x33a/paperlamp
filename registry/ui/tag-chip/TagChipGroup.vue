<script setup lang="ts">
import type { ToggleGroupRootEmits, ToggleGroupRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { TagChipVariants } from "."
import { reactiveOmit } from "@vueuse/core"
import { ToggleGroupRoot, useForwardPropsEmits } from "reka-ui"
import { provide } from "vue"
import { cn } from "@/lib/utils"
import { TAG_CHIP_GROUP_SIZE } from "."

const props = defineProps<ToggleGroupRootProps & {
  size?: TagChipVariants["size"]
  class?: HTMLAttributes["class"]
}>()
const emits = defineEmits<ToggleGroupRootEmits>()
const delegated = reactiveOmit(props, "class", "size")
const forwarded = useForwardPropsEmits(delegated, emits)

provide(TAG_CHIP_GROUP_SIZE, () => props.size)
</script>

<template>
  <ToggleGroupRoot
    v-slot="slotProps"
    data-slot="tag-chip-group"
    v-bind="forwarded"
    :class="cn('flex flex-wrap items-center gap-2', props.class)"
  >
    <slot v-bind="slotProps" />
  </ToggleGroupRoot>
</template>
