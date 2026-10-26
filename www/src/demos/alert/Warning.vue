<script setup lang="ts">
import { TriangleAlert } from "lucide-vue-next"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
</script>

<template>
  <Alert variant="warning" class="max-w-lg">
    <TriangleAlert />
    <AlertTitle>包含快速闪烁的画面</AlertTitle>
    <AlertDescription>对光敏感的用户请先调低亮度，或跳过此内容。</AlertDescription>
  </Alert>
</template>
