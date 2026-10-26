<script setup lang="ts">
import { Sparkles } from "lucide-vue-next"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
</script>

<template>
  <Alert variant="indigo" class="max-w-lg">
    <Sparkles />
    <AlertTitle>由 AI 生成</AlertTitle>
    <AlertDescription>这段介绍是模型读完源码后写的，可能有一本正经的胡说八道。</AlertDescription>
  </Alert>
</template>
