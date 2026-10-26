<script setup lang="ts">
import type { PaginationNextProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronRight } from "lucide-vue-next"
import { PaginationNext } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const props = defineProps<PaginationNextProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <PaginationNext
    data-slot="pagination-next"
    v-bind="delegated"
    :class="cn(buttonVariants({ variant: 'ghost', size: 'default' }), props.class)"
  >
    <slot>
      <span>下一页</span>
      <ChevronRight />
    </slot>
  </PaginationNext>
</template>
