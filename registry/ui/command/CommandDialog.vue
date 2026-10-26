<script setup lang="ts">
import type { DialogRootEmits, DialogRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { useForwardPropsEmits } from "reka-ui"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import Command from "./Command.vue"

const props = withDefaults(defineProps<DialogRootProps & {
  title?: string
  description?: string
  class?: HTMLAttributes["class"]
}>(), {
  title: "命令面板",
  description: "搜索工具、标签或命令",
})
const emits = defineEmits<DialogRootEmits>()
const delegated = reactiveOmit(props, "title", "description", "class")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <Dialog v-bind="forwarded">
    <DialogContent
      :class="cn('max-w-lg gap-0 overflow-hidden p-0', props.class)"
    >
      <DialogHeader class="sr-only">
        <DialogTitle>{{ title }}</DialogTitle>
        <DialogDescription>{{ description }}</DialogDescription>
      </DialogHeader>
      <Command class="[&_[data-slot=command-input-wrapper]]:pr-12 [&_[data-slot=command-input-wrapper]]:h-12 [&_[data-slot=command-input]]:h-full">
        <slot />
      </Command>
    </DialogContent>
  </Dialog>
</template>
