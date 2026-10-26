<script setup lang="ts">
import type { PaginationPrevProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronLeft } from "lucide-vue-next"
import { PaginationPrev } from "reka-ui"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const props = defineProps<PaginationPrevProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <PaginationPrev
    data-slot="pagination-previous"
    v-bind="delegated"
    :class="cn(buttonVariants({ variant: 'ghost', size: 'default' }), props.class)"
  >
    <slot>
      <ChevronLeft />
      <span>上一页</span>
    </slot>
  </PaginationPrev>
</template>
