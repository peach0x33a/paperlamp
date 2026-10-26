<script setup lang="ts">
import { Sparkles } from "lucide-vue-next"
import { NoticePanel, NoticePanelContent, NoticePanelTrigger } from "@/components/ui/notice-panel"
</script>

<template>
  <NoticePanel class="w-full max-w-xl">
    <NoticePanelTrigger>
      <Sparkles /> AI 总结
    </NoticePanelTrigger>
    <NoticePanelContent>
      <p>多数人喜欢它「一句话生成像素小镇」的玩法；有几条评论吐槽生成的居民名字总在重复，也有人用它给跑团画地图。</p>
    </NoticePanelContent>
  </NoticePanel>
</template>
