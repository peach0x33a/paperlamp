<script setup lang="ts">
import { AspectRatio } from "@/components/ui/aspect-ratio"
</script>

<template>
  <div class="w-full max-w-md overflow-hidden rounded-md border">
    <AspectRatio :ratio="16 / 9">
      <div
        class="flex size-full items-end bg-muted p-4"
        role="img"
        aria-label="像素小镇生成器的预览（示意）"
      >
        <span class="font-mono label-sm text-muted-foreground">像素小镇生成器 · 预览</span>
      </div>
    </AspectRatio>
  </div>
</template>
