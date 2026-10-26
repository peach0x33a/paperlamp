<script setup lang="ts">
import { buttonVariants } from "@/components/ui/button"
</script>

<template>
  <main class="mx-auto w-full max-w-6xl px-4 py-16">
    <h1 class="headline-xl">
      纸灯 · Paperlamp
    </h1>
    <RouterLink to="/docs" :class="buttonVariants()" class="mt-6">
      阅读文档
    </RouterLink>
  </main>
</template>
