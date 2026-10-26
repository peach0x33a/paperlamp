<script setup lang="ts">
import { buttonVariants } from "@/components/ui/button"
</script>

<template>
  <div class="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
    <p class="label-md text-muted-foreground">
      404
    </p>
    <h1 class="mt-2 headline-lg">
      页面不存在
    </h1>
    <p class="mt-3 text-muted-foreground">
      请检查链接，或在组件列表里查找。
    </p>
    <RouterLink to="/docs" :class="buttonVariants({ variant: 'outline' })" class="mt-8">
      回到文档
    </RouterLink>
  </div>
</template>
