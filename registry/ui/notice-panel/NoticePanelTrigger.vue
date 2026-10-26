<script setup lang="ts">
import type { CollapsibleTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronDown } from "lucide-vue-next"
import { CollapsibleTrigger } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<CollapsibleTriggerProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <CollapsibleTrigger
    data-slot="notice-panel-trigger"
    v-bind="delegated"
    :class="cn(
      'group/notice-trigger flex w-full items-center gap-2 px-4 py-3 text-left font-bold',
      'text-indigo-text group-data-[variant=neutral]/notice-panel:text-foreground',
      'rounded-r-sm outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring',
      '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
      props.class,
    )"
  >
    <slot />
    <ChevronDown
      class="ml-auto size-5 opacity-70 transition-transform duration-150 ease-quiet group-data-[state=open]/notice-trigger:rotate-180"
      aria-hidden="true"
    />
  </CollapsibleTrigger>
</template>
