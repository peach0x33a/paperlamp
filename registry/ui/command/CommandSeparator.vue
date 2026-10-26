<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { injectCommand } from "./context"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
// Groups collapse while filtering, so separators between them would stack up as empty lines.
const { search } = injectCommand()
</script>

<template>
  <div
    v-if="!search"
    data-slot="command-separator"
    role="separator"
    :class="cn('-mx-1 my-1 h-px bg-border', props.class)"
  />
</template>
