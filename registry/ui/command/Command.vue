<script setup lang="ts">
import type { ListboxRootEmits, ListboxRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ListboxRoot, useForwardPropsEmits } from "reka-ui"
import { provide } from "vue"
import { cn } from "@/lib/utils"
import { commandKey, createCommandContext } from "./context"

const props = defineProps<ListboxRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<ListboxRootEmits>()
const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emits)

provide(commandKey, createCommandContext())
</script>

<template>
  <ListboxRoot
    data-slot="command"
    v-bind="forwarded"
    :class="cn('flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground', props.class)"
  >
    <slot />
  </ListboxRoot>
</template>
