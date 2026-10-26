<script setup lang="ts">
import type { CollapsibleContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CollapsibleContent } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<CollapsibleContentProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <CollapsibleContent
    data-slot="notice-panel-content"
    v-bind="delegated"
    class="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
  >
    <div :class="cn('px-4 pb-4 text-foreground [&_p]:leading-relaxed', props.class)">
      <slot />
    </div>
  </CollapsibleContent>
</template>
