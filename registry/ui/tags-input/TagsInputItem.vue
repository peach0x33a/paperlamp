<script setup lang="ts">
import type { TagsInputItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TagsInputItem } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<TagsInputItemProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <TagsInputItem
    data-slot="tags-input-item"
    v-bind="delegated"
    :class="cn(
      'flex h-6 w-fit items-center gap-1 rounded-sm bg-muted pr-1 pl-2 font-mono text-xs font-medium text-foreground',
      'data-[state=active]:outline-2 data-[state=active]:outline-offset-2 data-[state=active]:outline-ring',
      'data-[disabled]:opacity-50',
      props.class,
    )"
  >
    <slot />
  </TagsInputItem>
</template>
