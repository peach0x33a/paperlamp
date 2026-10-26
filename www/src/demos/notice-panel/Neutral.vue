<script setup lang="ts">
import { BookOpen } from "lucide-vue-next"
import { NoticePanel, NoticePanelContent, NoticePanelTrigger } from "@/components/ui/notice-panel"
</script>

<template>
  <NoticePanel variant="neutral" class="w-full max-w-xl">
    <NoticePanelTrigger>
      <BookOpen /> 使用说明
    </NoticePanelTrigger>
    <NoticePanelContent>
      <p>点击画布任意位置落子；按住 Shift 可以悔棋。所有数据只存在你的浏览器里。</p>
    </NoticePanelContent>
  </NoticePanel>
</template>
