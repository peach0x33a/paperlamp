<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { SheetVariants } from "."
import { reactiveOmit } from "@vueuse/core"
import { X } from "lucide-vue-next"
import { DialogClose, DialogContent, DialogPortal, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"
import { sheetVariants } from "."
import SheetOverlay from "./SheetOverlay.vue"

const props = withDefaults(defineProps<DialogContentProps & {
  side?: SheetVariants["side"]
  class?: HTMLAttributes["class"]
}>(), {
  side: "right",
})
const emits = defineEmits<DialogContentEmits>()
const delegated = reactiveOmit(props, "class", "side")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <DialogPortal>
    <SheetOverlay />
    <DialogContent
      data-slot="sheet-content"
      :data-side="side"
      v-bind="forwarded"
      :class="cn(sheetVariants({ side }), props.class)"
    >
      <slot />
      <DialogClose
        data-slot="sheet-close"
        class="absolute top-4 right-4 inline-flex size-8 items-center justify-center rounded-sm text-muted-foreground outline-none transition-colors duration-150 ease-quiet hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <X class="size-5" />
        <span class="sr-only">关闭</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
