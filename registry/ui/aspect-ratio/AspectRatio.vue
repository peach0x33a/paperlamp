<script setup lang="ts">
import type { AspectRatioProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { AspectRatio } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<AspectRatioProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <AspectRatio
    data-slot="aspect-ratio"
    v-bind="delegated"
    :class="cn(props.class)"
  >
    <slot />
  </AspectRatio>
</template>
