<script setup lang="ts">
import { Wrench } from "lucide-vue-next"
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

const tools = [
  { title: "猫名字典", desc: "给它一张猫的照片，它给你二十个名字。", tags: ["图像", "娱乐"], date: "2026-10-12", score: 4.5 },
  { title: "会议废话检测", desc: "上传会议录音，标出没有信息量的句子，并给出废话占比。", tags: ["音频", "效率"], date: "2026-09-30", score: 4.1, maintenance: true },
  { title: "古诗接龙", desc: "你出一句，它接一句，接不上就认输。", tags: ["文字", "学习"], date: "2026-09-21", score: null },
]
</script>

<template>
  <div class="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
    <ToolCard v-for="tool in tools" :key="tool.title">
      <ToolCardHeader>
        <ToolCardTitle>{{ tool.title }}</ToolCardTitle>
        <Badge v-if="tool.maintenance" variant="status">
          <Wrench /> 维护中
        </Badge>
      </ToolCardHeader>
      <ToolCardDescription>{{ tool.desc }}</ToolCardDescription>
      <ToolCardTags>
        <ToolCardTag v-for="tag in tool.tags" :key="tag">
          {{ tag }}
        </ToolCardTag>
      </ToolCardTags>
      <ToolCardFooter>
        <span>{{ tool.date }}</span>
        <ToolCardScore :value="tool.score" />
      </ToolCardFooter>
    </ToolCard>
  </div>
</template>
