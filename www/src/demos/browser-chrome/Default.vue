<script setup lang="ts">
import { Maximize2, RotateCw, Share2 } from "lucide-vue-next"
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
</script>

<template>
  <BrowserChrome class="w-full max-w-2xl">
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
    <BrowserChromeCanvas class="grid h-56 place-items-center">
      <p class="label-md opacity-60">
        工具在这块画布里运行
      </p>
    </BrowserChromeCanvas>
  </BrowserChrome>
</template>
