<script setup lang="ts">
import { computed } from "vue"
import CodeBlock from "../components/CodeBlock.vue"
import { addCommand, initCommand } from "../docs/registry"
import BuilderDialog from "./BuilderDialog.vue"
import { radiusValue, usePreset } from "./usePreset"

const open = defineModel<boolean>("open", { default: false })
const { preset, code } = usePreset()

const fresh = computed(() => `${initCommand(code.value)}\n${addCommand(["button", "tool-card"])}`)
const css = computed(() => `:root {\n  --radius: ${radiusValue(preset.value.radius)};\n}`)
</script>

<template>
  <BuilderDialog v-model:open="open" title="获取代码" :description="`当前 preset：${code}`" wide>
    <section class="grid gap-2">
      <h3 class="text-sm font-bold">
        用这个 preset 初始化
      </h3>
      <p class="body-sm text-muted-foreground">
        新项目直接运行；已经装过纸灯的项目再运行一次 init，只会按 preset 重写主题文件，组件不受影响。
      </p>
      <CodeBlock :code="fresh" lang="bash" />
    </section>
    <section class="grid gap-2">
      <h3 class="text-sm font-bold">
        只改 CSS 变量
      </h3>
      <p class="body-sm text-muted-foreground">
        在 paperlamp.css 里改 --radius，三档圆角会一起变。
      </p>
      <CodeBlock :code="css" lang="css" file="paperlamp.css" />
    </section>
  </BuilderDialog>
</template>
