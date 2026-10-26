<script setup lang="ts">
import type { KeyMessage } from "../create/usePreset"
import { onKeyStroke } from "@vueuse/core"
import { ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import Customizer from "../create/Customizer.vue"
import PreviewFrame from "../create/PreviewFrame.vue"
import { extractPreset, usePreset } from "../create/usePreset"

const route = useRoute()
const router = useRouter()
const { code, load, undo, redo, randomize } = usePreset()
const customizer = ref<InstanceType<typeof Customizer>>()

// Read the URL before children set up, so the preview iframe starts with the right preset.
const initial = typeof route.query.preset === "string" ? extractPreset(route.query.preset) : null
if (initial) load(initial)
watch(code, c => router.replace({ query: { ...route.query, preset: c } }), { immediate: true })

// Shortcuts mirror shadcn/create: R random, O open preset, Ctrl/⌘+Z undo, +Shift redo.
function handle(key: string, mod: boolean, shift: boolean) {
  const k = key.toLowerCase()
  if (mod && k === "z") return shift ? redo() : undo()
  if (mod && k === "y") return redo()
  if (mod) return
  if (k === "r") randomize()
  else if (k === "o") customizer.value?.openPreset()
}
const typing = (e: KeyboardEvent) => {
  const t = e.target as HTMLElement | null
  return !!t?.closest("input, textarea, [contenteditable], [role=dialog], [role=menu]")
}
onKeyStroke((e) => {
  if (typing(e) || e.altKey || e.repeat) return
  const mod = e.metaKey || e.ctrlKey
  const k = e.key.toLowerCase()
  if (!["z", "y", "r", "o"].includes(k)) return
  e.preventDefault()
  handle(e.key, mod, e.shiftKey)
})
const fromFrame = (m: KeyMessage) => handle(m.key, m.mod, m.shift)
</script>

<template>
  <main class="flex min-h-0 flex-1 flex-col gap-4 p-4 md:h-[calc(100svh-4rem)] md:flex-row-reverse md:gap-6 md:p-6">
    <h1 class="sr-only">
      构建纸灯主题
    </h1>
    <PreviewFrame @key="fromFrame" />
    <Customizer ref="customizer" />
  </main>
</template>
