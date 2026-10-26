<script setup lang="ts">
import { MessageSquareText } from "lucide-vue-next"
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import { NoticePanel, NoticePanelContent, NoticePanelTrigger } from "@/components/ui/notice-panel"

const open = ref(false)
</script>

<template>
  <div class="grid w-full max-w-xl gap-3">
    <NoticePanel v-model:open="open">
      <NoticePanelTrigger>
        <MessageSquareText /> 评论区总结 · 42 条
      </NoticePanelTrigger>
      <NoticePanelContent>
        <p>好评集中在「上手快」；最常见的建议是加一个导出 PNG 的按钮。</p>
      </NoticePanelContent>
    </NoticePanel>
    <Button variant="bracket" class="justify-self-start" @click="open = !open">
      {{ open ? "收起总结" : "展开总结" }}
    </Button>
  </div>
</template>
