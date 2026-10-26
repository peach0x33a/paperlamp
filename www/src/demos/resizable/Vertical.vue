<script setup lang="ts">
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
</script>

<template>
  <div class="h-64 w-full max-w-xl overflow-hidden rounded-md border bg-card">
    <ResizablePanelGroup direction="vertical" class="h-full">
      <ResizablePanel :default-size="50" :min-size="25">
        <div class="flex h-full flex-col gap-2 p-4">
          <h3 class="title-md">工具说明</h3>
          <p class="body-sm text-muted-foreground">
            这是一个会把文字变成小诗的玩具。输入一句话，它会换个语气再说一遍。
          </p>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel :default-size="50" :min-size="25">
        <div class="flex h-full flex-col gap-2 p-4">
          <h3 class="label-md text-muted-foreground">更新记录</h3>
          <ul class="space-y-1 body-sm">
            <li>修复了长句子被截断的问题</li>
            <li>新增「古风」语气选项</li>
          </ul>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>
