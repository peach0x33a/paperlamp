<script setup lang="ts">
import type { CollapsibleTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CollapsibleTrigger } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<CollapsibleTriggerProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <CollapsibleTrigger
    data-slot="collapsible-trigger"
    v-bind="delegated"
    :class="cn('outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-sm', props.class)"
  >
    <slot />
  </CollapsibleTrigger>
</template>
