<script setup lang="ts">
import { Camera, ExternalLink, Flame, Ghost, Volume2, Zap } from "lucide-vue-next"
import { WarningBanner, WarningBannerDescription } from "@/components/ui/warning-banner"

const warnings = [
  { icon: Zap, text: "闪烁画面：包含快速切换的高对比颜色。" },
  { icon: Volume2, text: "突然的响声：打开前请调低音量。" },
  { icon: Ghost, text: "惊吓内容：有一个会跳出来的东西。" },
  { icon: Camera, text: "隐私：会请求摄像头权限，画面不离开本机。" },
  { icon: ExternalLink, text: "外部链接：内容来自第三方站点。" },
  { icon: Flame, text: "高负载：可能让设备发热，笔记本请接上电源。" },
]
</script>

<template>
  <div class="flex w-full max-w-xl flex-col gap-px">
    <WarningBanner v-for="w in warnings" :key="w.text">
      <template #icon>
        <component :is="w.icon" />
      </template>
      <WarningBannerDescription>{{ w.text }}</WarningBannerDescription>
    </WarningBanner>
  </div>
</template>
