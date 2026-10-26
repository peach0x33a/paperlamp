<script setup lang="ts">
import type { TabsListProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TabsList } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<TabsListProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <TabsList
    data-slot="tabs-list"
    v-bind="delegated"
    :class="cn('inline-flex w-fit items-center gap-0.5 rounded-sm bg-muted p-0.5 font-mono label-md text-muted-foreground', props.class)"
  >
    <slot />
  </TabsList>
</template>
