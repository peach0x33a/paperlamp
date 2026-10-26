<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
</script>

<template>
  <div class="w-full max-w-xl">
    <Item as-child variant="outline">
      <a href="#" class="hover:bg-accent">
        <ItemMedia variant="icon">
          <ArrowUpRight />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>图谱工具页</ItemTitle>
          <ItemDescription>在工具详情里查看它的来源、标签与最近的评论。</ItemDescription>
        </ItemContent>
        <ItemActions>
          <span class="font-mono label-sm text-muted-foreground">打开</span>
        </ItemActions>
      </a>
    </Item>
  </div>
</template>
