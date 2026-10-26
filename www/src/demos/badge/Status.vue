<script setup lang="ts">
import { EyeOff, Sparkles, TriangleAlert, Wrench } from "lucide-vue-next"
import { Badge } from "@/components/ui/badge"
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Badge variant="status">
      <Wrench /> 维护中
    </Badge>
    <Badge variant="featured">
      <Sparkles /> 精选
    </Badge>
    <Badge variant="indigo">
      <EyeOff /> 已隐藏
    </Badge>
    <Badge variant="warning">
      <TriangleAlert /> 闪烁画面
    </Badge>
  </div>
</template>
