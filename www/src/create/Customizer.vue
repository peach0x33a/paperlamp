<script setup lang="ts">
import { Copy, Dices, FolderOpen, Redo2, RotateCcw, Undo2 } from "lucide-vue-next"
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import { toast } from "@/components/ui/sonner"
import GetCodeDialog from "./GetCodeDialog.vue"
import OpenPresetDialog from "./OpenPresetDialog.vue"
import RadiusPicker from "./RadiusPicker.vue"
import { usePreset } from "./usePreset"

const { code, canUndo, canRedo, isDefault, undo, redo, randomize, reset } = usePreset()

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

    <div class="min-h-0 flex-1 overflow-y-auto p-2">
      <RadiusPicker />
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
