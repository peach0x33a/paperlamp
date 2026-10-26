<script setup lang="ts">
import { CircleAlert } from "lucide-vue-next"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
</script>

<template>
  <Alert variant="destructive" class="max-w-lg">
    <CircleAlert />
    <AlertTitle>评论没发出去</AlertTitle>
    <AlertDescription>登录状态过期了，重新登录后草稿还在。</AlertDescription>
  </Alert>
</template>
