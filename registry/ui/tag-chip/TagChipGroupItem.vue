<script setup lang="ts">
import type { ToggleGroupItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { TagChipVariants } from "."
import { reactiveOmit } from "@vueuse/core"
import { ToggleGroupItem, useForwardProps } from "reka-ui"
import { inject } from "vue"
import { cn } from "@/lib/utils"
import { TAG_CHIP_GROUP_SIZE, tagChipVariants } from "."

const props = defineProps<ToggleGroupItemProps & {
  size?: TagChipVariants["size"]
  class?: HTMLAttributes["class"]
}>()
const delegated = reactiveOmit(props, "class", "size")
const forwarded = useForwardProps(delegated)
const groupSize = inject(TAG_CHIP_GROUP_SIZE, () => undefined)
</script>

<template>
  <ToggleGroupItem
    v-slot="slotProps"
    data-slot="tag-chip"
    v-bind="forwarded"
    :class="cn(tagChipVariants({ size: size ?? groupSize() }), props.class)"
  >
    <slot v-bind="slotProps" />
  </ToggleGroupItem>
</template>
