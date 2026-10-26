<script setup lang="ts">
import { Info } from "lucide-vue-next"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
</script>

<template>
  <Alert class="max-w-lg">
    <Info />
    <AlertTitle>这个工具需要联网</AlertTitle>
    <AlertDescription>它会调用外部接口生成图片，离线时只能看到上一次的结果。</AlertDescription>
  </Alert>
</template>
