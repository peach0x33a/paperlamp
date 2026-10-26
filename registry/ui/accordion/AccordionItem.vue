<script setup lang="ts">
import type { AccordionItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { AccordionItem } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<AccordionItemProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <AccordionItem
    data-slot="accordion-item"
    v-bind="delegated"
    :class="cn('border-b last:border-b-0', props.class)"
  >
    <slot />
  </AccordionItem>
</template>
