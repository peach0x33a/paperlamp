<script setup lang="ts">
import type { AlertDialogContentEmits, AlertDialogContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { AlertDialogContent, AlertDialogPortal, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"
import AlertDialogOverlay from "./AlertDialogOverlay.vue"

const props = defineProps<AlertDialogContentProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<AlertDialogContentEmits>()
const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogContent
      data-slot="alert-dialog-content"
      v-bind="forwarded"
      :class="cn(
        'fixed top-1/2 left-1/2 z-60 grid max-h-[calc(100svh-2rem)] w-[calc(100vw-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 gap-6 overflow-y-auto rounded-sm border bg-card p-8 text-card-foreground shadow-2xl outline-none',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        props.class,
      )"
    >
      <slot />
    </AlertDialogContent>
  </AlertDialogPortal>
</template>
