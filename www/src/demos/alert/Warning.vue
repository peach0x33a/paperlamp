<script setup lang="ts">
import { TriangleAlert } from "lucide-vue-next"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
</script>

<template>
  <Alert variant="warning" class="max-w-lg">
    <TriangleAlert />
    <AlertTitle>包含快速闪烁的画面</AlertTitle>
    <AlertDescription>对光敏感的朋友请先调低屏幕亮度，或者直接跳过这一个。</AlertDescription>
  </Alert>
</template>
