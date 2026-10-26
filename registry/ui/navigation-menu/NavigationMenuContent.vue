<script setup lang="ts">
import type { NavigationMenuContentEmits, NavigationMenuContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { NavigationMenuContent, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<NavigationMenuContentProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<NavigationMenuContentEmits>()
const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <NavigationMenuContent
    data-slot="navigation-menu-content"
    v-bind="forwarded"
    :class="cn(
      'left-0 top-0 w-full p-2 pr-2.5 md:absolute md:w-auto',
      'data-[motion=from-start]:animate-in data-[motion=from-end]:animate-in data-[motion=to-start]:animate-out data-[motion=to-end]:animate-out',
      'data-[motion=from-end]:fade-in-0 data-[motion=from-start]:fade-in-0 data-[motion=to-end]:fade-out-0 data-[motion=to-start]:fade-out-0',
      props.class,
    )"
  >
    <slot />
  </NavigationMenuContent>
</template>
