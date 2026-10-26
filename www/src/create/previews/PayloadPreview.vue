<script setup lang="ts">
import { Maximize2, RotateCw, Share2 } from "lucide-vue-next"
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import {
  BrowserChrome,
  BrowserChromeAction,
  BrowserChromeActions,
  BrowserChromeAddressBar,
  BrowserChromeCanvas,
  BrowserChromeHeader,
  BrowserChromeStatus,
  BrowserChromeTrafficLights,
} from "@/components/ui/browser-chrome"
import { RatingStars } from "@/components/ui/rating"
import { WarningBanner, WarningBannerDescription } from "@/components/ui/warning-banner"

// A 12×8 toy town: lit windows flicker on a fixed pattern, so the canvas has something to show.
const lit = ref(new Set([3, 8, 14, 21, 27, 30, 41, 46, 52, 59, 63, 70, 77, 84, 90]))
function toggle(i: number) {
  const next = new Set(lit.value)
  if (next.has(i)) next.delete(i)
  else next.add(i)
  lit.value = next
}
</script>

<template>
  <div class="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-10">
    <header class="flex flex-wrap items-end justify-between gap-4">
      <div class="grid gap-2">
        <h1 class="headline-xl">
          像素小镇生成器
        </h1>
        <div class="flex items-center gap-3 label-sm text-muted-foreground">
          <span>2026-10-18</span>
          <RatingStars :value="4.8" />
        </div>
      </div>
      <Button variant="bracket-indigo">
        评分
      </Button>
    </header>

    <WarningBanner>
      <WarningBannerDescription>高负载：可能让设备发热，笔记本请接上电源。</WarningBannerDescription>
    </WarningBanner>

    <BrowserChrome>
      <BrowserChromeHeader>
        <BrowserChromeTrafficLights />
        <BrowserChromeAddressBar url="toybox.example/t/pixel-town" />
        <BrowserChromeStatus>beta</BrowserChromeStatus>
        <BrowserChromeActions>
          <BrowserChromeAction aria-label="重新加载">
            <RotateCw />
          </BrowserChromeAction>
          <BrowserChromeAction aria-label="分享">
            <Share2 />
          </BrowserChromeAction>
          <BrowserChromeAction aria-label="专注模式">
            <Maximize2 />
          </BrowserChromeAction>
        </BrowserChromeActions>
      </BrowserChromeHeader>
      <BrowserChromeCanvas class="grid place-items-center p-8">
        <div class="grid grid-cols-12 gap-1" role="group" aria-label="点亮窗户">
          <button
            v-for="i in 96"
            :key="i"
            type="button"
            class="size-5 border border-black/10 transition-colors duration-150 dark:border-white/15"
            :class="lit.has(i) ? 'bg-rating' : 'bg-black/5 dark:bg-white/10'"
            :aria-label="`窗户 ${i}`"
            :aria-pressed="lit.has(i)"
            @click="toggle(i)"
          />
        </div>
      </BrowserChromeCanvas>
    </BrowserChrome>
  </div>
</template>
