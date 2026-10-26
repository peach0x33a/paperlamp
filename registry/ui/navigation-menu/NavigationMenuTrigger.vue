<script setup lang="ts">
import type { NavigationMenuTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronDown } from "lucide-vue-next"
import { NavigationMenuTrigger } from "reka-ui"
import { cn } from "@/lib/utils"
import { navigationMenuTriggerStyle } from "./navigationMenuTriggerStyle"

const props = defineProps<NavigationMenuTriggerProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <NavigationMenuTrigger
    data-slot="navigation-menu-trigger"
    v-bind="delegated"
    :class="cn(navigationMenuTriggerStyle(), 'group', props.class)"
  >
    <slot />
    <ChevronDown
      class="relative top-px ml-1 size-3 transition duration-150 ease-quiet group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuTrigger>
</template>
