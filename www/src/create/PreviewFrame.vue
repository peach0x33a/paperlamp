<script setup lang="ts">
import type { KeyMessage, PreviewMessage, PreviewMode, PreviewPage } from "./usePreset"
import { useEventListener } from "@vueuse/core"
import { ExternalLink, Moon, Sun } from "lucide-vue-next"
import { computed, ref, watch } from "vue"
import { useTheme } from "../composables/useTheme"
import { encodePreset, usePreset } from "./usePreset"

const emit = defineEmits<{ key: [msg: KeyMessage] }>()

const { effective, code } = usePreset()
const { isDark } = useTheme()

const pages: { id: PreviewPage, label: string }[] = [
  { id: "blocks", label: "示例" },
  { id: "dashboard", label: "仪表盘" },
  { id: "components", label: "组件" },
]
const page = ref<PreviewPage>("blocks")
const mode = ref<PreviewMode>(isDark.value ? "dark" : "light")

const frame = ref<HTMLIFrameElement>()
const message = computed<PreviewMessage>(() => ({
  type: "paperlamp:preview",
  preset: encodePreset(effective.value),
  mode: mode.value,
  page: page.value,
}))
// The src is fixed at mount so the frame never reloads; later changes travel by postMessage.
const query = () => new URLSearchParams({ preset: message.value.preset, mode: mode.value, page: page.value })
const src = `${import.meta.env.BASE_URL}create/preview?${query()}`
const standalone = computed(() => `${import.meta.env.BASE_URL}create/preview?${query()}`)

function send() {
  frame.value?.contentWindow?.postMessage(message.value, location.origin)
}
watch(message, send)

useEventListener(window, "message", (e: MessageEvent) => {
  if (e.origin !== location.origin || e.source !== frame.value?.contentWindow) return
  // The frame announces itself once its route has mounted; the iframe load event can fire earlier.
  if (e.data?.type === "paperlamp:ready") send()
  else if (e.data?.type === "paperlamp:key") emit("key", e.data as KeyMessage)
})
</script>

<template>
  <section data-slot="preview" class="flex min-h-[32rem] min-w-0 flex-1 flex-col overflow-hidden rounded-md border bg-card shadow-sm md:min-h-0">
    <div class="flex h-11 shrink-0 items-center gap-3 border-b px-3">
      <div role="radiogroup" aria-label="预览页面" class="flex items-center gap-0.5 rounded-sm border bg-background p-0.5 label-sm">
        <button
          v-for="p in pages"
          :key="p.id"
          type="button"
          role="radio"
          :aria-checked="page === p.id"
          class="rounded-sm px-2.5 py-1 transition-colors duration-150 ease-quiet outline-none focus-visible:outline-2 focus-visible:outline-ring"
          :class="page === p.id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'"
          @click="page = p.id"
        >
          {{ p.label }}
        </button>
      </div>
      <span class="hidden label-sm text-muted-foreground sm:inline">preset {{ code }}</span>
      <div class="ml-auto flex items-center gap-0.5">
        <button
          type="button"
          class="inline-flex size-7 items-center justify-center rounded-sm text-muted-foreground transition-colors duration-150 ease-quiet outline-none hover:bg-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
          :aria-label="mode === 'dark' ? '预览亮色' : '预览暗色'"
          @click="mode = mode === 'dark' ? 'light' : 'dark'"
        >
          <Sun v-if="mode === 'dark'" class="size-3.5" />
          <Moon v-else class="size-3.5" />
        </button>
        <a
          :href="standalone"
          target="_blank"
          rel="noreferrer"
          class="inline-flex size-7 items-center justify-center rounded-sm text-muted-foreground transition-colors duration-150 ease-quiet outline-none hover:bg-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
          aria-label="在新标签页打开预览"
        >
          <ExternalLink class="size-3.5" />
        </a>
      </div>
    </div>
    <iframe ref="frame" :src="src" title="纸灯预览" class="block min-h-0 w-full flex-1 border-0 bg-background" @load="send" />
  </section>
</template>
