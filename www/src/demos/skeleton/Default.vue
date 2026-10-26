<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton"
</script>

<template>
  <div class="flex items-center gap-3">
    <Skeleton class="size-10" />
    <div class="grid gap-2">
      <Skeleton class="h-4 w-48" />
      <Skeleton class="h-3 w-32" />
    </div>
  </div>
</template>
