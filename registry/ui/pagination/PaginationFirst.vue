<script setup lang="ts">
import type { PaginationFirstProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronsLeft } from "lucide-vue-next"
import { PaginationFirst } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const props = defineProps<PaginationFirstProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <PaginationFirst
    data-slot="pagination-first"
    v-bind="delegated"
    :class="cn(buttonVariants({ variant: 'ghost', size: 'icon' }), props.class)"
  >
    <slot>
      <ChevronsLeft />
      <span class="sr-only">第一页</span>
    </slot>
  </PaginationFirst>
</template>
