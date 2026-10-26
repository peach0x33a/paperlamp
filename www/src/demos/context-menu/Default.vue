<script setup lang="ts">
import { Bookmark, Copy, Flag, Share2 } from "lucide-vue-next"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger as-child>
      <div class="grid w-full max-w-sm gap-2 rounded-md border bg-card p-4 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" tabindex="0">
        <p class="title-md">像素小镇生成器</p>
        <p class="body-sm text-muted-foreground">一句话生成一座有居民的小镇。居民每天都会回家睡觉。</p>
        <p class="font-mono label-sm text-muted-foreground">小游戏 · 文字 · 2026-10-18</p>
      </div>
    </ContextMenuTrigger>
    <ContextMenuContent class="w-52">
      <ContextMenuItem>
        <Bookmark />
        收藏
      </ContextMenuItem>
      <ContextMenuItem>
        <Share2 />
        分享
      </ContextMenuItem>
      <ContextMenuItem>
        <Copy />
        复制链接
        <ContextMenuShortcut>⌘C</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem variant="destructive">
        <Flag />
        举报
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>
