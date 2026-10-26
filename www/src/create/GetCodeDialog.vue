<script setup lang="ts">
import { computed } from "vue"
import CodeBlock from "../components/CodeBlock.vue"
import { addCommand, initCommand } from "../docs/registry"
import BuilderDialog from "./BuilderDialog.vue"
import { presetCss, usePreset } from "./usePreset"

const open = defineModel<boolean>("open", { default: false })
const { preset, code } = usePreset()

const fresh = computed(() => `${initCommand(code.value)}\n${addCommand(["button", "card"])}`)
const css = computed(() => presetCss(preset.value) || "/* 默认 preset，paperlamp.css 不需要改动 */")
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
        已经装过纸灯的项目，也可以把下面这些变量覆盖到 paperlamp.css 里对应的 :root 与 .dark 中。
      </p>
      <CodeBlock :code="css" lang="css" file="paperlamp.css" />
    </section>
  </BuilderDialog>
</template>
