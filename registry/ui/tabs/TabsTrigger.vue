<script setup lang="ts">
import type { TabsTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TabsTrigger } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<TabsTriggerProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <TabsTrigger
    data-slot="tabs-trigger"
    v-bind="delegated"
    :class="cn(
      'inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-sm px-3 py-1 font-mono text-muted-foreground transition-[color,background-color,box-shadow] duration-150 ease-quiet',
      'outline-none hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-3.5',
      props.class,
    )"
  >
    <slot />
  </TabsTrigger>
</template>
