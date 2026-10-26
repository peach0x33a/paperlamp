<script setup lang="ts">
import type { Lang } from "../docs/highlight"
import { Check, Copy } from "lucide-vue-next"
import { ref, watchEffect } from "vue"
import { highlight } from "../docs/highlight"

const props = withDefaults(defineProps<{
  code: string
  lang?: Lang
  /** Optional file name shown in the header bar. */
  file?: string
  /** Cap the height and scroll (for long sources). */
  maxHeight?: string
}>(), { lang: "vue" })

const html = ref("")
watchEffect(async () => {
  const code = props.code.trimEnd()
  html.value = code ? await highlight(code, props.lang) : ""
})

const copied = ref(false)
async function copy() {
  await navigator.clipboard.writeText(props.code.trimEnd())
  copied.value = true
  setTimeout(() => (copied.value = false), 1600)
}
</script>

<template>
  <div class="group relative overflow-hidden rounded-md border bg-card">
    <div v-if="file" class="flex h-9 items-center border-b border-dashed bg-background px-4 label-sm text-muted-foreground">
      {{ file }}
    </div>
    <button
      type="button"
      class="absolute right-2 z-10 inline-flex size-7 items-center justify-center rounded-sm text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-foreground"
      :class="file ? 'top-1' : 'top-2'"
      :aria-label="copied ? '已复制' : '复制代码'"
      @click="copy"
    >
      <Check v-if="copied" class="size-3.5" />
      <Copy v-else class="size-3.5" />
    </button>
    <div
      class="overflow-auto p-4 font-mono text-[0.8125rem] leading-relaxed [&_pre]:outline-none"
      :style="maxHeight ? { maxHeight } : undefined"
    >
      <div v-if="html" v-html="html" />
      <pre v-else class="text-muted-foreground"><code>{{ code }}</code></pre>
    </div>
  </div>
</template>
