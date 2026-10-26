<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Button disabled>
      <Spinner /> 生成总结中
    </Button>
    <Button variant="outline" disabled>
      <Spinner /> 正在上传截图
    </Button>
  </div>
</template>
