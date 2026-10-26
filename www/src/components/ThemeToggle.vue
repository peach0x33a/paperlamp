<script setup lang="ts">
import type { ThemePreference } from "../composables/useTheme"
import { Monitor, Moon, Sun } from "lucide-vue-next"
import { useTheme } from "../composables/useTheme"

const { preference, setTheme } = useTheme()
const options: { value: ThemePreference, label: string, icon: typeof Sun }[] = [
  { value: "light", label: "亮色", icon: Sun },
  { value: "dark", label: "暗色", icon: Moon },
  { value: "auto", label: "跟随系统", icon: Monitor },
]

function onKey(e: KeyboardEvent, i: number) {
  const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0
  if (!delta) return
  e.preventDefault()
  const next = options[(i + delta + options.length) % options.length]!
  setTheme(next.value)
  ;((e.currentTarget as HTMLElement).parentElement?.children[options.indexOf(next)] as HTMLElement)?.focus()
}
</script>

<template>
  <div role="radiogroup" aria-label="主题" class="flex items-center gap-0.5 rounded-sm border bg-card p-0.5">
    <button
      v-for="(o, i) in options"
      :key="o.value"
      type="button"
      role="radio"
      :aria-checked="preference === o.value"
      :aria-label="o.label"
      :title="o.label"
      :tabindex="preference === o.value ? 0 : -1"
      class="inline-flex size-7 items-center justify-center rounded-sm transition-colors duration-150 outline-none focus-visible:outline-2 focus-visible:outline-ring"
      :class="preference === o.value ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'"
      @click="setTheme(o.value)"
      @keydown="onKey($event, i)"
    >
      <component :is="o.icon" class="size-4" />
    </button>
  </div>
</template>
