<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton"
</script>

<template>
  <div class="flex w-full max-w-sm flex-col gap-3 rounded-md border bg-card p-6">
    <Skeleton class="h-6 w-2/3" />
    <div class="grid gap-2">
      <Skeleton class="h-4 w-full" />
      <Skeleton class="h-4 w-4/5" />
    </div>
    <div class="flex gap-1.5">
      <Skeleton class="h-4 w-12" />
      <Skeleton class="h-4 w-10" />
    </div>
    <div class="flex justify-between border-t border-dashed pt-4">
      <Skeleton class="h-3 w-20" />
      <Skeleton class="h-3 w-10" />
    </div>
  </div>
</template>
