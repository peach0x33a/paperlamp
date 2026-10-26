<script setup lang="ts">
import type { ToggleGroupItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ToggleVariants } from "@/components/ui/toggle"
import { reactiveOmit } from "@vueuse/core"
import { ToggleGroupItem, useForwardProps } from "reka-ui"
import { inject } from "vue"
import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"
import { TOGGLE_GROUP_CONTEXT } from "."

const props = defineProps<ToggleGroupItemProps & {
  variant?: ToggleVariants["variant"]
  size?: ToggleVariants["size"]
  class?: HTMLAttributes["class"]
}>()
const delegated = reactiveOmit(props, "class", "variant", "size")
const forwarded = useForwardProps(delegated)
const group = inject(TOGGLE_GROUP_CONTEXT, undefined)
</script>

<template>
  <ToggleGroupItem
    data-slot="toggle-group-item"
    v-bind="forwarded"
    :class="cn(
      toggleVariants({
        variant: variant ?? group?.variant(),
        size: size ?? group?.size(),
      }),
      props.class,
    )"
  >
    <slot />
  </ToggleGroupItem>
</template>
