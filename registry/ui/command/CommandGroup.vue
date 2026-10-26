<script setup lang="ts">
import type { ListboxGroupProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ListboxGroup, ListboxGroupLabel } from "reka-ui"
import { provide } from "vue"
import { cn } from "@/lib/utils"
import { commandGroupKey, injectCommand } from "./context"

const props = defineProps<ListboxGroupProps & { heading?: string, class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class", "heading")

const id = Symbol("command-group")
provide(commandGroupKey, id)
const { isGroupVisible } = injectCommand()
</script>

<template>
  <ListboxGroup
    data-slot="command-group"
    v-bind="delegated"
    v-show="isGroupVisible(id)"
    :class="cn('overflow-hidden p-1 text-foreground', props.class)"
  >
    <ListboxGroupLabel
      v-if="heading"
      data-slot="command-group-heading"
      class="px-2 py-1.5 label-sm text-muted-foreground"
    >
      {{ heading }}
    </ListboxGroupLabel>
    <slot />
  </ListboxGroup>
</template>
