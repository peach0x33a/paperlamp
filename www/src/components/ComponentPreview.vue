<script setup lang="ts">
import type { Component } from "vue"
import { defineAsyncComponent, ref, shallowRef } from "vue"
import { loadDemo, loadDemoSource } from "../docs/catalog"
import CodeBlock from "./CodeBlock.vue"

const props = defineProps<{
  slug: string
  name: string
  /** Vertical alignment of the stage. */
  align?: "center" | "start"
}>()

const tab = ref<"preview" | "code">("preview")
const Demo = shallowRef<Component>(defineAsyncComponent(() => loadDemo(props.slug, props.name)))
const source = ref("")
loadDemoSource(props.slug, props.name).then((s) => (source.value = s))
</script>

<template>
  <div>
    <div class="mb-3 flex items-center gap-4 border-b label-md" role="tablist">
      <button
        v-for="t in (['preview', 'code'] as const)"
        :key="t"
        type="button"
        role="tab"
        :aria-selected="tab === t"
        class="-mb-px border-b-2 px-1 pb-2 transition-colors duration-150"
        :class="tab === t ? 'border-foreground text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'"
        @click="tab = t"
      >
        {{ t === "preview" ? "预览" : "代码" }}
      </button>
    </div>
    <div
      v-show="tab === 'preview'"
      class="flex min-h-[260px] w-full justify-center rounded-md border bg-card p-6 sm:p-10"
      :class="align === 'start' ? 'items-start' : 'items-center'"
    >
      <Suspense>
        <component :is="Demo" />
        <template #fallback>
          <span class="label-sm text-muted-foreground">加载中…</span>
        </template>
      </Suspense>
    </div>
    <CodeBlock v-if="tab === 'code'" :code="source" lang="vue" max-height="480px" />
  </div>
</template>
