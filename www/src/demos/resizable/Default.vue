<script setup lang="ts">
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const code = `<main class="grid place-items-center">
  <h1>纸灯小测</h1>
  <button>再试一次</button>
</main>`
</script>

<template>
  <div class="h-64 w-full max-w-3xl overflow-hidden rounded-md border bg-card">
    <ResizablePanelGroup direction="horizontal" class="h-full">
      <ResizablePanel :default-size="45" :min-size="20">
        <div class="flex h-full flex-col">
          <div class="border-b px-3 py-2 label-sm text-muted-foreground">
            代码
          </div>
          <pre class="min-h-0 flex-1 overflow-auto p-3 font-mono text-xs leading-relaxed text-foreground">{{ code }}</pre>
        </div>
      </ResizablePanel>
      <ResizableHandle with-handle />
      <ResizablePanel :default-size="55" :min-size="20">
        <div class="flex h-full flex-col">
          <div class="border-b px-3 py-2 label-sm text-muted-foreground">
            预览
          </div>
          <div class="flex min-h-0 flex-1 items-center justify-center p-6">
            <div class="w-full max-w-xs rounded-md border bg-background p-6 text-center">
              <h2 class="title-md">纸灯小测</h2>
              <p class="mt-2 body-sm text-muted-foreground">
                点击按钮查看效果。
              </p>
            </div>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>
