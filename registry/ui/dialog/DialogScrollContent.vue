<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { X } from "lucide-vue-next"
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<DialogContentProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<DialogContentEmits>()
const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      data-slot="dialog-overlay"
      class="fixed inset-0 z-60 grid place-items-center overflow-y-auto bg-overlay py-8 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
    >
      <DialogContent
        data-slot="dialog-content"
        v-bind="forwarded"
        :class="cn(
          'relative z-60 my-8 grid w-[calc(100vw-2rem)] max-w-sm gap-6 rounded-sm border bg-card p-8 text-card-foreground shadow-2xl outline-none',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
          props.class,
        )"
      >
        <slot />
        <DialogClose
          data-slot="dialog-close"
          class="absolute top-4 right-4 inline-flex size-8 items-center justify-center rounded-sm text-muted-foreground outline-none transition-colors duration-150 ease-quiet hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <X class="size-5" />
          <span class="sr-only">关闭</span>
        </DialogClose>
      </DialogContent>
    </DialogOverlay>
  </DialogPortal>
</template>
