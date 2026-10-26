<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
</script>

<template>
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle>猫名字典</CardTitle>
      <CardAction>
        <Button variant="ghost" size="sm">收藏</Button>
      </CardAction>
      <CardDescription>给它一张猫的照片，它给你二十个名字，挑哪个都行。</CardDescription>
    </CardHeader>
    <CardContent>
      <p class="body-sm text-muted-foreground">上次更新 2026-10-12</p>
    </CardContent>
    <CardFooter variant="dashed">
      <span>文字 · 生成</span>
      <span>4.5</span>
    </CardFooter>
  </Card>
</template>
