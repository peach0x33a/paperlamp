<script setup lang="ts">
import type { AvatarRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { AvatarRoot } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<AvatarRootProps & { class?: HTMLAttributes["class"] }>()
const delegated = reactiveOmit(props, "class")
</script>

<template>
  <AvatarRoot
    data-slot="avatar"
    v-bind="delegated"
    :class="cn('relative flex size-10 shrink-0 overflow-hidden rounded-sm', props.class)"
  >
    <slot />
  </AvatarRoot>
</template>
