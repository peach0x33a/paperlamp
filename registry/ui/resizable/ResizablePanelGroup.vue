<script setup lang="ts">
import type { SplitterGroupEmits, SplitterGroupProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { SplitterGroup, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<SplitterGroupProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<SplitterGroupEmits>()
const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <SplitterGroup
    data-slot="resizable-panel-group"
    v-bind="forwarded"
    :class="cn('flex h-full w-full data-[orientation=vertical]:flex-col', props.class)"
  >
    <slot />
  </SplitterGroup>
</template>
