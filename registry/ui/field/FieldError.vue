<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  errors?: ({ message?: string } | string | undefined)[]
  class?: HTMLAttributes["class"]
}>()

const messages = computed(() => {
  const list = (props.errors ?? [])
    .map(e => (typeof e === "string" ? e : e?.message))
    .filter((m): m is string => Boolean(m))
  return [...new Set(list)]
})
</script>

<template>
  <div
    role="alert"
    data-slot="field-error"
    :class="cn('body-sm font-normal text-destructive', props.class)"
  >
    <slot>
      <template v-if="messages.length === 1">
        {{ messages[0] }}
      </template>
      <ul v-else-if="messages.length > 1" class="ml-4 flex list-disc flex-col gap-1">
        <li v-for="message in messages" :key="message">
          {{ message }}
        </li>
      </ul>
    </slot>
  </div>
</template>
