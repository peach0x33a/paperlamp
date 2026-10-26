<script setup lang="ts">
import type { AccordionContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { AccordionContent } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<AccordionContentProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <AccordionContent
    data-slot="accordion-content"
    v-bind="delegated"
    :class="cn('overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down', props.class)"
  >
    <div class="body-md pb-4 text-muted-foreground">
      <slot />
    </div>
  </AccordionContent>
</template>
