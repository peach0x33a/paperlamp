<script setup lang="ts">
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"

const updates = [
  { name: "图谱", initial: "图", text: "新增了按标签筛选的视图，链接已更新。" },
  { name: "小墨", initial: "墨", text: "修复了深色模式下评论框的边框颜色。" },
  { name: "纸鹤", initial: "鹤", text: "维护说明已写入工具页，有需要的话可以看看。" },
]
</script>

<template>
  <div class="w-full max-w-xl">
    <ItemGroup>
      <template v-for="(u, i) in updates" :key="u.name">
        <ItemSeparator v-if="i > 0" />
        <Item>
          <ItemMedia>
            <Avatar class="size-8">
              <AvatarFallback>{{ u.initial }}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>你关注的工具更新了：{{ u.name }}</ItemTitle>
            <ItemDescription>{{ u.text }}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">查看</Button>
          </ItemActions>
        </Item>
      </template>
    </ItemGroup>
  </div>
</template>
