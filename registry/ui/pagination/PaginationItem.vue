<script setup lang="ts">
import type { PaginationListItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ButtonVariants } from "@/components/ui/button"
import { reactiveOmit } from "@vueuse/core"
import { PaginationListItem } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const props = withDefaults(defineProps<PaginationListItemProps & {
  /** Current page: renders as the outline variant with an ink border. */
  isActive?: boolean
  size?: ButtonVariants["size"]
  class?: HTMLAttributes["class"]
}>(), {
  isActive: false,
  size: "icon",
})
const delegated = reactiveOmit(props, "class", "isActive", "size")
</script>

<template>
  <PaginationListItem
    data-slot="pagination-item"
    v-bind="delegated"
    :aria-current="isActive ? 'page' : undefined"
    :class="cn(
      buttonVariants({ variant: isActive ? 'outline' : 'ghost', size }),
      'font-mono tabular-nums',
      isActive && 'border-foreground text-foreground',
      props.class,
    )"
  >
    <slot />
  </PaginationListItem>
</template>
