<script setup lang="ts">
import type { TagsInputRootEmits, TagsInputRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TagsInputRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<TagsInputRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<TagsInputRootEmits>()
const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <TagsInputRoot
    data-slot="tags-input"
    v-bind="forwarded"
    :class="cn(
      'flex min-h-9 w-full min-w-0 flex-wrap items-center gap-1.5 rounded-sm border bg-background px-2 py-1.5 text-sm text-foreground',
      'transition-[border-color] duration-150 ease-quiet',
      'focus-within:border-foreground',
      'data-[invalid]:border-destructive',
      'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
      props.class,
    )"
  >
    <slot />
  </TagsInputRoot>
</template>
