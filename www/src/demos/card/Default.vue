<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
</script>

<template>
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle>给你的小镜子</CardTitle>
      <CardDescription>把一句话变成一张会眨眼的像素头像，只在你的浏览器里完成。</CardDescription>
    </CardHeader>
    <CardContent>
      <Button>开始画</Button>
    </CardContent>
  </Card>
</template>
