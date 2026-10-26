<script setup lang="ts">
import type { AccordionTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronDown } from "lucide-vue-next"
import { AccordionHeader, AccordionTrigger } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      data-slot="accordion-trigger"
      v-bind="delegated"
      :class="cn(
        'group flex flex-1 items-center justify-between gap-4 rounded-sm py-4 text-left title-md text-foreground outline-none transition-colors duration-150 ease-quiet hover:text-foreground/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50',
        props.class,
      )"
    >
      <slot />
      <ChevronDown
        class="size-4 shrink-0 text-muted-foreground transition-transform duration-150 ease-quiet group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </AccordionTrigger>
  </AccordionHeader>
</template>
