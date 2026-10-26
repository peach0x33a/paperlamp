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
        新项目直接运行。已安装纸灯的项目再运行一次 init，会按 preset 重写 paperlamp.css，已有组件不会被覆盖。
      </p>
      <CodeBlock :code="fresh" lang="bash" />
    </section>
    <section class="grid gap-2">
      <h3 class="text-sm font-bold">
        只改 CSS 变量
      </h3>
      <p class="body-sm text-muted-foreground">
        也可以手动把下面的变量改进 paperlamp.css 的 :root 与 .dark 里。
      </p>
      <CodeBlock :code="css" lang="css" file="paperlamp.css" />
    </section>
  </BuilderDialog>
</template>
