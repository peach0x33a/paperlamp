<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
</script>

<template>
  <Tabs default-value="intro" class="w-full max-w-xl">
    <TabsList>
      <TabsTrigger value="intro">
        简介
      </TabsTrigger>
      <TabsTrigger value="comments">
        评论
      </TabsTrigger>
      <TabsTrigger value="changelog" disabled>
        更新日志
      </TabsTrigger>
    </TabsList>
    <TabsContent value="intro" class="body-md">
      <p>这个工具还没有更新日志，第一次发布后会出现在这里。</p>
    </TabsContent>
    <TabsContent value="comments" class="body-md">
      <p class="text-muted-foreground">暂无评论。</p>
    </TabsContent>
  </Tabs>
</template>
