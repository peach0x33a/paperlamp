<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { TriangleAlert, X } from "lucide-vue-next"
import { cn } from "@/lib/utils"

const props = defineProps<{
  dismissible?: boolean
  dismissLabel?: string
  class?: HTMLAttributes["class"]
}>()
const emits = defineEmits<{
  dismiss: []
}>()
const open = defineModel<boolean>("open", { default: true })

function dismiss() {
  open.value = false
  emits("dismiss")
}
</script>

<template>
  <div
    v-if="open"
    data-slot="warning-banner"
    role="note"
    :class="cn(
      'flex items-start gap-3 border-l-4 border-warning-bar bg-warning-wash p-3 text-xs font-medium leading-relaxed text-warning-text',
      props.class,
    )"
  >
    <span data-slot="warning-banner-icon" class="flex h-[1.625em] shrink-0 items-center text-warning [&_svg]:size-4" aria-hidden="true">
      <slot name="icon">
        <TriangleAlert />
      </slot>
    </span>
    <div class="grid min-w-0 flex-1 gap-0.5">
      <slot />
    </div>
    <!-- The dismiss X follows currentColor (warning-text), so it lightens in dark mode. -->
    <button
      v-if="dismissible"
      type="button"
      data-slot="warning-banner-dismiss"
      :aria-label="props.dismissLabel ?? '关闭提醒'"
      class="-m-1 inline-flex size-6 shrink-0 items-center justify-center rounded-sm text-current opacity-70 transition-opacity duration-150 ease-quiet hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring outline-none [&_svg]:size-4"
      @click="dismiss"
    >
      <X />
    </button>
  </div>
</template>
