<script setup lang="ts">
import type { MenubarRootEmits, MenubarRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { MenubarRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<MenubarRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<MenubarRootEmits>()
const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <MenubarRoot
    data-slot="menubar"
    v-bind="forwarded"
    :class="cn('flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-sm', props.class)"
  >
    <slot />
  </MenubarRoot>
</template>
