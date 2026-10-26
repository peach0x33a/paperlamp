<script setup lang="ts">
import type { TagsInputItemTextProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TagsInputItemText } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<TagsInputItemTextProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <TagsInputItemText
    data-slot="tags-input-item-text"
    v-bind="delegated"
    :class="cn('truncate', props.class)"
  >
    <slot />
  </TagsInputItemText>
</template>
