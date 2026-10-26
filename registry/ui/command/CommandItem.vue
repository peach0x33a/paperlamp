<script setup lang="ts">
import type { ListboxItemEmits, ListboxItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ListboxItem, useForwardPropsEmits } from "reka-ui"
import { computed, inject, onBeforeUnmount, watchEffect } from "vue"
import { cn } from "@/lib/utils"
import { commandGroupKey, injectCommand } from "./context"

const props = withDefaults(defineProps<ListboxItemProps & {
  /** Extra strings the search also matches against, e.g. a tag name. */
  keywords?: string[]
  class?: HTMLAttributes["class"]
}>(), {
  keywords: () => [],
})
const emits = defineEmits<ListboxItemEmits>()
const delegated = reactiveOmit(props, "class", "keywords")
const forwarded = useForwardPropsEmits(delegated, emits)

const ctx = injectCommand()
const groupId = inject(commandGroupKey, undefined)
const id = Symbol("command-item")

const visible = computed(() => {
  const query = ctx.search.value.trim().toLowerCase()
  if (!query)
    return true
  return [String(props.value), ...props.keywords].some(text => text.toLowerCase().includes(query))
})

watchEffect(() => {
  ctx.register(id, { group: groupId, visible: visible.value })
})
onBeforeUnmount(() => ctx.unregister(id))
</script>

<template>
  <ListboxItem
    v-if="visible"
    data-slot="command-item"
    v-bind="forwarded"
    :class="cn('relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors duration-150 ease-quiet data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4', props.class)"
  >
    <slot />
  </ListboxItem>
</template>
