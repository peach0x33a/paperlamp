<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
</script>

<template>
  <main
    data-slot="sidebar-inset"
    :class="cn(
      'relative flex min-h-svh min-w-0 flex-1 flex-col bg-background',
      'peer-data-[variant=inset]:m-2 peer-data-[variant=inset]:min-h-[calc(100svh-1rem)] peer-data-[variant=inset]:rounded-md peer-data-[variant=inset]:border peer-data-[variant=inset]:bg-card peer-data-[variant=inset]:shadow-sm',
      props.class,
    )"
  >
    <slot />
  </main>
</template>
