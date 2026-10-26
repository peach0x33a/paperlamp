<script setup lang="ts">
import type { TagsInputItemDeleteProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TagsInputItemDelete } from "reka-ui"
import { X } from "lucide-vue-next"
import { cn } from "@/lib/utils"

const props = defineProps<TagsInputItemDeleteProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <TagsInputItemDelete
    data-slot="tags-input-item-delete"
    v-bind="delegated"
    :class="cn(
      'inline-flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-sm text-muted-foreground outline-none',
      'transition-[color] duration-150 ease-quiet hover:text-foreground',
      'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring',
      props.class,
    )"
  >
    <slot>
      <X class="size-3" aria-hidden="true" />
    </slot>
  </TagsInputItemDelete>
</template>
