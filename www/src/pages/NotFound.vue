<script setup lang="ts">
import { buttonVariants } from "@/components/ui/button"
</script>

<template>
  <div class="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
    <p class="label-md text-muted-foreground">
      404
    </p>
    <h1 class="mt-2 headline-lg">
      这一页还没写
    </h1>
    <p class="mt-3 text-muted-foreground">
      链接可能已经改名，或者这个组件尚未收录。
    </p>
    <RouterLink to="/docs" :class="buttonVariants({ variant: 'outline' })" class="mt-8">
      回到文档
    </RouterLink>
  </div>
</template>
