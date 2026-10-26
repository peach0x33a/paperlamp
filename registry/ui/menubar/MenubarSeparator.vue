<script setup lang="ts">
import type { MenubarSeparatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { MenubarSeparator } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<MenubarSeparatorProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <MenubarSeparator data-slot="menubar-separator" v-bind="delegated" :class="cn('-mx-1 my-1 h-px bg-border', props.class)">
    <slot />
  </MenubarSeparator>
</template>
