<script setup lang="ts">
import { Kbd, KbdGroup } from "@/components/ui/kbd"
</script>

<template>
  <div class="grid gap-3 body-sm text-muted-foreground">
    <p>
      按
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>K</Kbd>
      </KbdGroup>
      搜索工具。
    </p>
    <p>按 <Kbd>F</Kbd> 进入专注模式，<Kbd>Esc</Kbd> 退出。</p>
  </div>
</template>
