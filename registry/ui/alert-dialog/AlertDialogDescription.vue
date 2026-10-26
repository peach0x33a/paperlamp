<script setup lang="ts">
import type { AlertDialogDescriptionProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { AlertDialogDescription } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<AlertDialogDescriptionProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <AlertDialogDescription data-slot="alert-dialog-description" v-bind="delegated" :class="cn('body-sm text-muted-foreground', props.class)">
    <slot />
  </AlertDialogDescription>
</template>
