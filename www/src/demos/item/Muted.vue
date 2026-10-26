<script setup lang="ts">
import { Badge } from "@/components/ui/badge"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
</script>

<template>
  <div class="w-full max-w-xl">
    <Item variant="muted" size="sm">
      <ItemContent>
        <ItemTitle>
          这个工具正在维护
          <Badge variant="status">维护中</Badge>
        </ItemTitle>
        <ItemDescription>作者在修复一个输入法下的光标问题，恢复时会在这里更新。</ItemDescription>
      </ItemContent>
    </Item>
  </div>
</template>
