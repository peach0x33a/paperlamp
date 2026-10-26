<script setup lang="ts">
import { X } from "lucide-vue-next"
import { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle } from "reka-ui"

defineProps<{
  title: string
  description?: string
  /** Panel width; the share-style dialogs widen to 28rem (DESIGN.md Overlays). */
  wide?: boolean
}>()
const open = defineModel<boolean>("open", { default: false })
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-[60] bg-overlay backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
      <DialogContent
        class="fixed top-1/2 left-1/2 z-[60] grid max-h-[calc(100svh-2rem)] w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 gap-6 overflow-y-auto rounded-sm border bg-card p-8 text-card-foreground shadow-2xl outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
        :class="wide ? 'max-w-md' : 'max-w-sm'"
      >
        <div class="grid gap-1.5 pr-6">
          <DialogTitle class="title-md">
            {{ title }}
          </DialogTitle>
          <DialogDescription v-if="description" class="body-sm text-muted-foreground">
            {{ description }}
          </DialogDescription>
        </div>
        <slot />
        <DialogClose
          class="absolute top-4 right-4 inline-flex size-8 items-center justify-center rounded-sm text-muted-foreground transition-colors duration-150 ease-quiet outline-none hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
          aria-label="关闭"
        >
          <X class="size-5" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
