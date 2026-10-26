<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { useClipboard } from "@vueuse/core"
import { Check, Lock } from "lucide-vue-next"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<{
  url: string
  /** Copy the URL to the clipboard on click; the `copy` event fires either way. */
  copyable?: boolean
  class?: HTMLAttributes["class"]
}>(), {
  copyable: true,
})
const emits = defineEmits<{
  copy: [url: string]
}>()

const { copy, copied } = useClipboard({ legacy: true, copiedDuring: 1600 })

async function onClick() {
  if (props.copyable)
    await copy(props.url)
  emits("copy", props.url)
}
</script>

<template>
  <button
    type="button"
    data-slot="browser-chrome-address-bar"
    :title="copyable ? '点击复制地址' : undefined"
    :class="cn(
      'flex h-7 min-w-0 flex-1 items-center gap-2 rounded-full border border-transparent bg-background px-3 label-sm text-muted-foreground',
      'transition-[color,border-color] duration-150 ease-quiet hover:border-indigo/50 hover:text-foreground',
      'outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
      '[&_svg]:size-3 [&_svg]:shrink-0',
      props.class,
    )"
    @click="onClick"
  >
    <Check v-if="copied" class="text-indigo-text" aria-hidden="true" />
    <Lock v-else aria-hidden="true" />
    <span class="truncate">{{ url }}</span>
    <span class="sr-only" aria-live="polite">{{ copied ? "已复制" : "" }}</span>
    <span v-if="copied" class="ml-auto shrink-0 text-indigo-text" aria-hidden="true">已复制</span>
  </button>
</template>
