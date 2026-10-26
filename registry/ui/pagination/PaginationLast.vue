<script setup lang="ts">
import type { PaginationLastProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronsRight } from "lucide-vue-next"
import { PaginationLast } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const props = defineProps<PaginationLastProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <PaginationLast
    data-slot="pagination-last"
    v-bind="delegated"
    :class="cn(buttonVariants({ variant: 'ghost', size: 'icon' }), props.class)"
  >
    <slot>
      <ChevronsRight />
      <span class="sr-only">最后一页</span>
    </slot>
  </PaginationLast>
</template>
