<script setup lang="ts">
import { Bookmark, Copy, Share2 } from "lucide-vue-next"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
</script>

<template>
  <TooltipProvider>
    <div class="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger as-child>
          <Button variant="outline" size="icon" aria-label="收藏">
            <Bookmark />
          </Button>
        </TooltipTrigger>
        <TooltipContent>收藏这个工具</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger as-child>
          <Button variant="outline" size="icon" aria-label="复制链接">
            <Copy />
          </Button>
        </TooltipTrigger>
        <TooltipContent>复制链接</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger as-child>
          <Button variant="outline" size="icon" aria-label="分享">
            <Share2 />
          </Button>
        </TooltipTrigger>
        <TooltipContent>分享给朋友</TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
</template>
