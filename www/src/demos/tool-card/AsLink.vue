<script setup lang="ts">
import {
  ToolCard,
  ToolCardDescription,
  ToolCardFooter,
  ToolCardHeader,
  ToolCardScore,
  ToolCardTag,
  ToolCardTags,
  ToolCardTitle,
} from "@/components/ui/tool-card"
</script>

<template>
  <ToolCard as-child class="w-full max-w-sm">
    <a href="#tool/haiku-clock">
      <ToolCardHeader>
        <ToolCardTitle>俳句时钟</ToolCardTitle>
      </ToolCardHeader>
      <ToolCardDescription>每一分钟写一首新的俳句告诉你现在几点。</ToolCardDescription>
      <ToolCardTags>
        <ToolCardTag>文字</ToolCardTag>
      </ToolCardTags>
      <ToolCardFooter>
        <span>2026-10-02</span>
        <ToolCardScore :value="3.9" />
      </ToolCardFooter>
    </a>
  </ToolCard>
</template>
