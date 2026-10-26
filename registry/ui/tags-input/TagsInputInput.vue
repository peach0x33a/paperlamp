<script setup lang="ts">
import type { TagsInputInputProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TagsInputInput } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<TagsInputInputProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <TagsInputInput
    data-slot="tags-input-input"
    v-bind="delegated"
    :class="cn(
      'h-6 min-w-24 flex-1 bg-transparent px-1 text-sm text-foreground outline-none',
      'placeholder:text-muted-foreground',
      'disabled:cursor-not-allowed',
      props.class,
    )"
  />
</template>
