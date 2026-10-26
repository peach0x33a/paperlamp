<script setup lang="ts">
import { ref, watch } from "vue"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import BuilderDialog from "./BuilderDialog.vue"
import { encodePreset, extractPreset, usePreset } from "./usePreset"

const open = defineModel<boolean>("open", { default: false })
const { set } = usePreset()

const text = ref("")
const error = ref("")
watch(open, (o) => {
  if (o) {
    text.value = ""
    error.value = ""
  }
})

function submit() {
  const p = extractPreset(text.value)
  if (!p) {
    error.value = "没认出 preset。可以粘贴 a4 这样的代码、带 --preset 的命令，或构建页的链接。"
    return
  }
  set(p)
  open.value = false
  text.value = encodePreset(p)
}
</script>

<template>
  <BuilderDialog v-model:open="open" title="打开 preset" description="粘贴 preset 代码、init 命令或构建页链接。">
    <form class="grid gap-4" @submit.prevent="submit">
      <div class="grid gap-2">
        <Label for="preset-input">Preset</Label>
        <Input id="preset-input" v-model="text" placeholder="a4" autocomplete="off" :aria-invalid="error ? 'true' : undefined" />
        <p v-if="error" class="body-sm text-destructive">
          {{ error }}
        </p>
      </div>
      <Button type="submit" class="w-full" :disabled="!text.trim()">
        打开 preset
      </Button>
    </form>
  </BuilderDialog>
</template>
