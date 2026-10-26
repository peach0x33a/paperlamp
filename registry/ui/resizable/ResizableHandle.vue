<script setup lang="ts">
import type { SplitterResizeHandleEmits, SplitterResizeHandleProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { GripVertical } from "lucide-vue-next"
import { SplitterResizeHandle, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<SplitterResizeHandleProps & {
  withHandle?: boolean
  class?: HTMLAttributes["class"]
}>()
const emits = defineEmits<SplitterResizeHandleEmits>()
const delegated = reactiveOmit(props, "class", "withHandle")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <SplitterResizeHandle
    data-slot="resizable-handle"
    v-bind="forwarded"
    :class="cn(
      'group relative flex items-center justify-center bg-border outline-none',
      'data-[orientation=horizontal]:h-full data-[orientation=horizontal]:w-px',
      'data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full',
      'after:absolute after:content-[\'\']',
      'data-[orientation=horizontal]:after:inset-y-0 data-[orientation=horizontal]:after:-inset-x-1.5',
      'data-[orientation=vertical]:after:inset-x-0 data-[orientation=vertical]:after:-inset-y-1.5',
      'focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring',
      'disabled:pointer-events-none',
      props.class,
    )"
  >
    <div
      v-if="withHandle"
      data-slot="resizable-handle-grip"
      class="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-card group-data-[orientation=vertical]:h-3 group-data-[orientation=vertical]:w-4 group-data-[orientation=vertical]:rotate-90"
    >
      <GripVertical class="size-3 text-muted-foreground" />
    </div>
  </SplitterResizeHandle>
</template>
