<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { InputGroupAddonVariants } from "."
import { cn } from "@/lib/utils"
import { inputGroupAddonVariants } from "."

const props = withDefaults(defineProps<{
  align?: InputGroupAddonVariants["align"]
  class?: HTMLAttributes["class"]
}>(), {
  align: "inline-start",
})

// Clicking the addon background focuses the control, like a native input well.
function onClick(event: MouseEvent) {
  const target = event.target as HTMLElement | null
  if (target?.closest("button")) return
  const root = event.currentTarget as HTMLElement
  root.parentElement?.querySelector<HTMLInputElement | HTMLTextAreaElement>("[data-slot=input-group-control]")?.focus()
}
</script>

<template>
  <div
    role="group"
    data-slot="input-group-addon"
    :data-align="align"
    :class="cn(inputGroupAddonVariants({ align }), props.class)"
    @click="onClick"
  >
    <slot />
  </div>
</template>
