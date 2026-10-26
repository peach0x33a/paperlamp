<script setup lang="ts">
import { computed, ref, watchEffect } from "vue"
import CodeBlock from "../components/CodeBlock.vue"
import ComponentPreview from "../components/ComponentPreview.vue"
import { bySlug, loadRegistrySources } from "../docs/catalog"
import { registryUrl } from "../docs/registry"
import { CATEGORIES } from "../docs/types"
import NotFound from "./NotFound.vue"

const props = defineProps<{ slug: string }>()
const entry = computed(() => bySlug.get(props.slug))
const items = computed(() => entry.value?.registry ?? [props.slug])
const category = computed(() => CATEGORIES.find(c => c.id === entry.value?.category)?.label)

const install = ref<"cli" | "manual">("cli")
const cli = computed(() => `npx shadcn-vue@latest add ${items.value.map(registryUrl).join(" ")}`)

const sources = ref<{ file: string, code: string }[]>([])
watchEffect(async () => {
  const all = await Promise.all(items.value.map(async item =>
    (await loadRegistrySources(item)).map(s => ({ ...s, file: `components/ui/${item}/${s.file}` }))))
  sources.value = all.flat()
})
</script>

<template>
  <NotFound v-if="!entry" />
  <article v-else class="max-w-3xl">
    <p class="mb-2 label-sm text-muted-foreground">
      组件 / {{ category }}
    </p>
    <h1 class="headline-lg">
      {{ entry.title }} <span class="text-muted-foreground">{{ entry.zh }}</span>
    </h1>
    <p class="mt-3 max-w-[42rem] text-muted-foreground">
      {{ entry.description }}
    </p>

    <section class="mt-8">
      <ComponentPreview :key="`${slug}-hero`" :slug="slug" :name="entry.examples[0]!.name" />
    </section>

    <section class="mt-12">
      <h2 id="installation" class="headline-md">
        安装
      </h2>
      <div class="mt-4 mb-3 flex gap-4 border-b label-md">
        <button
          v-for="t in (['cli', 'manual'] as const)"
          :key="t"
          type="button"
          class="-mb-px border-b-2 px-1 pb-2 transition-colors duration-150"
          :class="install === t ? 'border-foreground text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'"
          @click="install = t"
        >
          {{ t === "cli" ? "命令行" : "手动复制" }}
        </button>
      </div>
      <CodeBlock v-if="install === 'cli'" :code="cli" lang="bash" />
      <div v-else class="flex flex-col gap-4">
        <p class="text-sm text-muted-foreground">
          将以下文件复制到项目中，并确保已配置 <code class="label-sm text-foreground">cn()</code> 工具函数与主题变量（见「安装」）。
        </p>
        <CodeBlock
          v-for="s in sources"
          :key="s.file"
          :code="s.code"
          :file="s.file"
          :lang="s.file.endsWith('.ts') ? 'ts' : 'vue'"
          max-height="420px"
        />
      </div>
    </section>

    <section v-if="entry.examples.length > 1" class="mt-12">
      <h2 id="examples" class="headline-md">
        示例
      </h2>
      <div class="mt-6 flex flex-col gap-10">
        <div v-for="ex in entry.examples.slice(1)" :key="ex.name">
          <h3 :id="ex.name" class="title-md">
            {{ ex.title }}
          </h3>
          <p v-if="ex.description" class="mt-1 text-sm text-muted-foreground">
            {{ ex.description }}
          </p>
          <div class="mt-4">
            <ComponentPreview :slug="slug" :name="ex.name" />
          </div>
        </div>
      </div>
    </section>

    <section v-if="entry.notes?.length" class="mt-12">
      <h2 id="notes" class="headline-md">
        设计说明
      </h2>
      <ul class="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-border">
        <li v-for="(n, i) in entry.notes" :key="i">
          {{ n }}
        </li>
      </ul>
    </section>
  </article>
</template>
