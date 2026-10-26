<script setup lang="ts">
import type { KeyMessage, PreviewMessage, PreviewMode, PreviewPage } from "../create/usePreset"
import { useEventListener } from "@vueuse/core"
import { onMounted, ref, watch } from "vue"
import { useRoute } from "vue-router"
import { useTheme } from "../composables/useTheme"
import ComponentsPreview from "../create/previews/ComponentsPreview.vue"
import GalleryPreview from "../create/previews/GalleryPreview.vue"
import PayloadPreview from "../create/previews/PayloadPreview.vue"

// Rendered inside the /create iframe (or standalone in a new tab). Radius and mode are
// applied to this document only, so the builder chrome around it is never affected.
const route = useRoute()
const q = (k: string) => (typeof route.query[k] === "string" ? (route.query[k] as string) : undefined)

const radius = ref(q("radius") ?? "8px")
const mode = ref<PreviewMode>(q("mode") === "dark" ? "dark" : "light")
const page = ref<PreviewPage>((["gallery", "components", "payload"] as const).find(p => p === q("page")) ?? "gallery")

const { isDark } = useTheme()
function apply() {
  const el = document.documentElement
  el.style.setProperty("--radius", radius.value)
  el.classList.toggle("dark", mode.value === "dark")
}
onMounted(() => {
  apply()
  if (window.parent !== window) window.parent.postMessage({ type: "paperlamp:ready" }, location.origin)
})
// useTheme owns html.dark for the docs site; re-assert the preview's own mode if it flips.
watch([radius, mode, isDark], apply, { flush: "post" })

useEventListener(window, "message", (e: MessageEvent<PreviewMessage>) => {
  if (e.origin !== location.origin || e.data?.type !== "paperlamp:preview") return
  radius.value = e.data.radius
  mode.value = e.data.mode
  page.value = e.data.page
})

// Forward builder shortcuts to the parent while focus is inside the frame.
useEventListener(window, "keydown", (e: KeyboardEvent) => {
  if (window.parent === window || e.altKey || e.repeat) return
  const t = e.target as HTMLElement | null
  if (t?.closest("input, textarea, [contenteditable], [role=dialog], [role=menu], [role=radiogroup]")) return
  const k = e.key.toLowerCase()
  const mod = e.metaKey || e.ctrlKey
  if (!["z", "y", "r", "o"].includes(k) || (!mod && (k === "z" || k === "y"))) return
  e.preventDefault()
  window.parent.postMessage({ type: "paperlamp:key", key: e.key, mod, shift: e.shiftKey } satisfies KeyMessage, location.origin)
})
</script>

<template>
  <div class="min-h-svh bg-background text-foreground">
    <GalleryPreview v-if="page === 'gallery'" />
    <ComponentsPreview v-else-if="page === 'components'" />
    <PayloadPreview v-else />
  </div>
</template>
