<script lang="ts" setup>
import type { ToasterProps } from "vue-sonner"
import { reactiveOmit } from "@vueuse/core"
import { CircleCheck, Info, LoaderCircle, OctagonX, TriangleAlert, X } from "lucide-vue-next"
import { Toaster as Sonner } from "vue-sonner"
import "vue-sonner/style.css"

// Paperlamp toast: an inverted pill — ink fill, paper text, 12px radius, shadow-2xl,
// fixed top-center (DESIGN.md Navigation › toast).
const props = withDefaults(defineProps<ToasterProps>(), {
  position: "top-center",
})
const delegated = reactiveOmit(props, "toastOptions")

const classes = {
  toast: "font-sans !shadow-2xl tracking-[0.01em]",
  description: "!text-primary-foreground/70",
  actionButton: "!bg-primary-foreground !text-primary !rounded-sm !font-bold",
  cancelButton: "!bg-primary-foreground/10 !text-primary-foreground !rounded-sm",
}
</script>

<template>
  <Sonner
    class="toaster group"
    :style="{
      '--normal-bg': 'var(--primary)',
      '--normal-text': 'var(--primary-foreground)',
      '--normal-border': 'color-mix(in oklab, var(--primary-foreground) 10%, transparent)',
      '--border-radius': 'var(--radius-lg)',
    }"
    v-bind="delegated"
    :toast-options="{ ...props.toastOptions, classes: { ...classes, ...props.toastOptions?.classes } }"
  >
    <template #success-icon><CircleCheck class="size-4" /></template>
    <template #info-icon><Info class="size-4" /></template>
    <template #warning-icon><TriangleAlert class="size-4" /></template>
    <template #error-icon><OctagonX class="size-4" /></template>
    <template #loading-icon><LoaderCircle class="size-4 animate-spin" /></template>
    <template #close-icon><X class="size-4" /></template>
  </Sonner>
</template>
