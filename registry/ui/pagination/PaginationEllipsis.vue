<script setup lang="ts">
import type { PaginationEllipsisProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { MoreHorizontal } from "lucide-vue-next"
import { PaginationEllipsis } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<PaginationEllipsisProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <PaginationEllipsis
    data-slot="pagination-ellipsis"
    v-bind="delegated"
    :class="cn('flex size-8 items-center justify-center text-muted-foreground', props.class)"
  >
    <MoreHorizontal class="size-4" aria-hidden="true" />
    <span class="sr-only">更多页</span>
  </PaginationEllipsis>
</template>
