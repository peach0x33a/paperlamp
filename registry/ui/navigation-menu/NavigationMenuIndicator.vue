<script setup lang="ts">
import type { NavigationMenuIndicatorProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { NavigationMenuIndicator } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<NavigationMenuIndicatorProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <NavigationMenuIndicator
    data-slot="navigation-menu-indicator"
    v-bind="delegated"
    :class="cn(
      'top-full z-1 flex h-1.5 items-end justify-center overflow-hidden',
      'data-[state=visible]:animate-in data-[state=visible]:fade-in-0 data-[state=hidden]:animate-out data-[state=hidden]:fade-out-0',
      props.class,
    )"
  >
    <div class="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border" />
  </NavigationMenuIndicator>
</template>
