<script setup lang="ts">
import { Sparkles, Wrench } from "lucide-vue-next"
import { ref } from "vue"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { NoticePanel, NoticePanelContent, NoticePanelTrigger } from "@/components/ui/notice-panel"
import { TagChipGroup, TagChipGroupItem } from "@/components/ui/tag-chip"
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

const tags = ["全部", "小游戏", "效率", "可视化", "整活", "学习"]
const tag = ref("全部")
const tools = [
  { title: "像素小镇生成器", desc: "输入一句话，生成一座有居民、有商店、有八卦的像素小镇。", tags: ["Canvas", "小游戏"], date: "2026-10-18", score: 4.8, featured: true },
  { title: "猫名字典", desc: "给它一张猫的照片，它给你二十个名字。", tags: ["图像", "整活"], date: "2026-10-12", score: 4.5 },
  { title: "会议废话检测", desc: "上传会议录音，标出每一句没有信息量的话，并给出一个废话浓度。", tags: ["音频", "效率"], date: "2026-09-30", score: 4.1, maintenance: true },
  { title: "古诗接龙", desc: "你出一句，它接一句，接不上就认输。", tags: ["文字", "学习"], date: "2026-09-21", score: null },
  { title: "俳句时钟", desc: "每一分钟写一首新的俳句告诉你现在几点。", tags: ["文字"], date: "2026-09-02", score: 3.9 },
  { title: "梦境记录仪", desc: "早上醒来把梦说给它听，它帮你整理成一篇短篇小说。", tags: ["文字", "整活"], date: "2026-08-27", score: 4.3 },
]
</script>

<template>
  <div class="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10">
    <header class="flex flex-wrap items-end justify-between gap-4">
      <div class="grid gap-2">
        <h1 class="headline-lg">
          幻觉产物 🏆
        </h1>
        <p class="body-md text-muted-foreground">
          AI 写的小工具，能玩，偶尔能用。
        </p>
      </div>
      <Button variant="bracket">
        登录
      </Button>
    </header>

    <TagChipGroup v-model="tag" type="single" aria-label="按标签筛选">
      <TagChipGroupItem v-for="t in tags" :key="t" :value="t">
        {{ t }}
      </TagChipGroupItem>
    </TagChipGroup>

    <NoticePanel>
      <NoticePanelTrigger>
        <Sparkles /> 本周 AI 总结
      </NoticePanelTrigger>
      <NoticePanelContent>
        <p>本周新上架 6 个工具，评论最多的是「像素小镇生成器」；「会议废话检测」正在维护，暂时打不开。</p>
      </NoticePanelContent>
    </NoticePanel>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ToolCard v-for="t in tools" :key="t.title">
        <ToolCardHeader>
          <ToolCardTitle>{{ t.title }}</ToolCardTitle>
          <Badge v-if="t.featured" variant="featured">
            <Sparkles /> 精选
          </Badge>
          <Badge v-if="t.maintenance" variant="status">
            <Wrench /> 维护中
          </Badge>
        </ToolCardHeader>
        <ToolCardDescription>{{ t.desc }}</ToolCardDescription>
        <ToolCardTags>
          <ToolCardTag v-for="x in t.tags" :key="x">
            {{ x }}
          </ToolCardTag>
        </ToolCardTags>
        <ToolCardFooter>
          <span>{{ t.date }}</span>
          <ToolCardScore :value="t.score" />
        </ToolCardFooter>
      </ToolCard>
    </div>
  </div>
</template>
