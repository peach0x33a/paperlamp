<script setup lang="ts">
import type { NavigationMenuRootEmits, NavigationMenuRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { NavigationMenuRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "@/lib/utils"
import NavigationMenuViewport from "./NavigationMenuViewport.vue"

const props = defineProps<NavigationMenuRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<NavigationMenuRootEmits>()
const delegated = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegated, emits)
</script>

<template>
  <NavigationMenuRoot
    data-slot="navigation-menu"
    v-bind="forwarded"
    :class="cn('group/navigation-menu relative flex max-w-max flex-1 items-center justify-center', props.class)"
  >
    <slot />
    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>
