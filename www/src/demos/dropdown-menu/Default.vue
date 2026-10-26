<script setup lang="ts">
import { Copy, EyeOff, Flag, MoreHorizontal, Share2 } from "lucide-vue-next"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon" aria-label="更多操作">
        <MoreHorizontal />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-48">
      <DropdownMenuItem>
        <Share2 />
        分享
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Copy />
        复制链接
        <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <EyeOff />
        隐藏该工具
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">
        <Flag />
        举报
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
