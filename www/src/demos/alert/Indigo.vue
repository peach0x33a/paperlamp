<script setup lang="ts">
import { Sparkles } from "lucide-vue-next"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
</script>

<template>
  <Alert variant="indigo" class="max-w-lg">
    <Sparkles />
    <AlertTitle>由 AI 生成</AlertTitle>
    <AlertDescription>这段介绍由模型根据源码生成，内容可能有误。</AlertDescription>
  </Alert>
</template>
