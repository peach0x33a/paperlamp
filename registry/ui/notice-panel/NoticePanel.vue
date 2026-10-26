<script setup lang="ts">
import type { CollapsibleRootEmits, CollapsibleRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { NoticePanelVariants } from "."
import { reactiveOmit } from "@vueuse/core"
import { CollapsibleRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"
import { noticePanelVariants } from "."

const props = withDefaults(defineProps<CollapsibleRootProps & {
  variant?: NoticePanelVariants["variant"]
  class?: HTMLAttributes["class"]
}>(), {
  defaultOpen: true,
  variant: "indigo",
})
const emits = defineEmits<CollapsibleRootEmits>()
const delegated = reactiveOmit(props, "class", "variant")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <CollapsibleRoot
    v-slot="slotProps"
    data-slot="notice-panel"
    :data-variant="variant"
    v-bind="forwarded"
    :class="cn(noticePanelVariants({ variant }), props.class)"
  >
    <slot v-bind="slotProps" />
  </CollapsibleRoot>
</template>
