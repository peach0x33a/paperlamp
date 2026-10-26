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
      <TabsTrigger value="changelog">
        更新日志
      </TabsTrigger>
    </TabsList>
    <TabsContent value="intro" class="body-md">
      <p>像素小镇生成器：一句话生成一座有居民的小镇。居民每天都会回家睡觉。</p>
    </TabsContent>
    <TabsContent value="comments" class="body-md">
      <p class="text-muted-foreground">评论区还没有人发言，来当第一个吧。</p>
    </TabsContent>
    <TabsContent value="changelog" class="body-md">
      <ol class="grid gap-2 body-sm">
        <li>2026-10-18 新增「居民作息」：晚上会回家睡觉。</li>
        <li>2026-08-27 首次上线。</li>
      </ol>
    </TabsContent>
  </Tabs>
</template>
