<script setup lang="ts">
import { Sparkles } from "lucide-vue-next"
import { Badge } from "@/components/ui/badge"
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
  <ToolCard class="w-full max-w-sm">
    <ToolCardHeader>
      <ToolCardTitle>像素小镇生成器</ToolCardTitle>
      <Badge variant="featured">
        <Sparkles /> 精选
      </Badge>
    </ToolCardHeader>
    <ToolCardDescription>
      输入一句话，生成一座有居民、有商店、有八卦的像素小镇。每个居民都有自己的作息，晚上会回家睡觉。
    </ToolCardDescription>
    <ToolCardTags>
      <ToolCardTag>Canvas</ToolCardTag>
      <ToolCardTag>小游戏</ToolCardTag>
      <ToolCardTag>本地运行</ToolCardTag>
    </ToolCardTags>
    <ToolCardFooter>
      <span>2026-10-18</span>
      <ToolCardScore :value="4.8" />
    </ToolCardFooter>
  </ToolCard>
</template>
