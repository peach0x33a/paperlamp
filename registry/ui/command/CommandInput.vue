<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { Search } from "lucide-vue-next"
import { ListboxFilter } from "reka-ui"
import { cn } from "@/lib/utils"
import { injectCommand } from "./context"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  placeholder?: string
  autoFocus?: boolean
  disabled?: boolean
}>()

const { search } = injectCommand()
</script>

<template>
  <div
    data-slot="command-input-wrapper"
    :class="cn('flex h-10 shrink-0 items-center gap-2 border-b px-3 transition-colors duration-150 ease-quiet focus-within:border-foreground', props.class)"
  >
    <Search class="size-4 shrink-0 text-muted-foreground" />
    <ListboxFilter
      v-model="search"
      data-slot="command-input"
      :placeholder="placeholder"
      :auto-focus="autoFocus"
      :disabled="disabled"
      class="flex h-full w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
    />
  </div>
</template>
