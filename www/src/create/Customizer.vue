<script setup lang="ts">
import { Copy, Dices, FolderOpen, Redo2, RotateCcw, Undo2 } from "lucide-vue-next"
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import { toast } from "@/components/ui/sonner"
import GetCodeDialog from "./GetCodeDialog.vue"
import OpenPresetDialog from "./OpenPresetDialog.vue"
import OptionPicker from "./OptionPicker.vue"
import { BASES, FONTS, RADII, THEMES, usePreset } from "./usePreset"

const { preset, code, canUndo, canRedo, isDefault, set, setOverride, clearOverride, undo, redo, randomize, reset } = usePreset()

const bases = BASES.map(b => ({ value: b.name, label: b.label }))
const themes = THEMES.map(t => ({ value: t.name, label: t.label }))
const fonts = FONTS.map(f => ({ value: f.name, label: f.label }))
const radii = [...RADII].sort((a, b) => Number(b.name === "default") - Number(a.name === "default"))
  .map(r => ({ value: r.name, label: r.label, hint: r.value }))
const swatch = (list: readonly { name: string, swatch: string }[], v: string) => list.find(x => x.name === v)!.swatch
const fontFamily = (v: string) => FONTS.find(f => f.name === v)!.value ?? "var(--font-serif)"
const radius = (v: string) => RADII.find(r => r.name === v)!.value
const preview = (key: keyof typeof preset.value) => (v: string | null) => (v ? setOverride({ [key]: v }) : clearOverride())

const openDialog = ref(false)
const codeDialog = ref(false)

async function copyPreset() {
  try {
    await navigator.clipboard.writeText(code.value)
    toast(`已复制 preset ${code.value}`)
  }
  catch {
    toast(`复制失败，preset 是 ${code.value}`)
  }
}

defineExpose({ openPreset: () => (openDialog.value = true) })
</script>

<template>
  <aside
    data-slot="customizer"
    class="flex max-h-full min-h-0 w-full shrink-0 flex-col self-start rounded-md border bg-card text-card-foreground shadow-sm md:w-60"
  >
    <header class="flex items-center justify-between border-b px-4 py-3">
      <span class="font-bold">构建</span>
      <div class="flex items-center gap-0.5">
        <Button variant="ghost" size="icon-sm" :disabled="!canUndo" aria-label="撤销" title="撤销 (Ctrl+Z)" @click="undo">
          <Undo2 />
        </Button>
        <Button variant="ghost" size="icon-sm" :disabled="!canRedo" aria-label="重做" title="重做 (Ctrl+Shift+Z)" @click="redo">
          <Redo2 />
        </Button>
      </div>
    </header>

    <div class="grid min-h-0 flex-1 content-start gap-0.5 overflow-y-auto p-2">
      <OptionPicker title="基色" :options="bases" :model-value="preset.base" @update:model-value="(v) => set({ base: v })" @preview="preview('base')">
        <template #icon="{ value }">
          <span class="size-4 shrink-0 rounded-full border border-black/10" :style="{ background: swatch(BASES, value) }" aria-hidden="true" />
        </template>
      </OptionPicker>
      <OptionPicker title="主题色" :options="themes" :model-value="preset.theme" @update:model-value="(v) => set({ theme: v })" @preview="preview('theme')">
        <template #icon="{ value }">
          <span class="size-4 shrink-0 rounded-full border border-black/10" :style="{ background: swatch(THEMES, value) }" aria-hidden="true" />
        </template>
      </OptionPicker>
      <OptionPicker title="字体" :options="fonts" :model-value="preset.font" @update:model-value="(v) => set({ font: v })" @preview="preview('font')">
        <template #icon="{ value }">
          <span class="w-5 shrink-0 text-center text-base leading-none" :style="{ fontFamily: fontFamily(value) }" aria-hidden="true">文</span>
        </template>
      </OptionPicker>
      <OptionPicker title="圆角" :options="radii" :model-value="preset.radius" @update:model-value="(v) => set({ radius: v })" @preview="preview('radius')">
        <template #icon="{ value }">
          <span class="size-4 shrink-0 rounded-tl-[var(--r)] border-t-2 border-l-2 border-current" :style="{ '--r': radius(value) }" aria-hidden="true" />
        </template>
      </OptionPicker>
    </div>

    <footer class="grid gap-2 border-t p-4">
      <Button variant="outline" class="w-full justify-between" @click="copyPreset">
        <span class="inline-flex items-center gap-2"><Copy /> 复制 preset</span>
        <span class="label-sm text-muted-foreground">{{ code }}</span>
      </Button>
      <Button variant="outline" class="w-full justify-between" @click="openDialog = true">
        <span class="inline-flex items-center gap-2"><FolderOpen /> 打开 preset</span>
        <Kbd>O</Kbd>
      </Button>
      <Button variant="outline" class="w-full justify-between" @click="randomize">
        <span class="inline-flex items-center gap-2"><Dices /> 随机</span>
        <Kbd>R</Kbd>
      </Button>
      <Button variant="ghost" class="w-full justify-start" :disabled="isDefault" @click="reset">
        <RotateCcw /> 恢复默认
      </Button>
      <Button class="mt-2 w-full" @click="codeDialog = true">
        获取代码
      </Button>
    </footer>

    <OpenPresetDialog v-model:open="openDialog" />
    <GetCodeDialog v-model:open="codeDialog" />
  </aside>
</template>
