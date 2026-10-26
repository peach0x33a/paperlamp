<script setup lang="ts">
import { Ghost } from "lucide-vue-next"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
</script>

<template>
  <Empty class="w-full max-w-lg">
    <EmptyHeader>
      <EmptyMedia>
        <Ghost />
      </EmptyMedia>
      <EmptyTitle>这个标签下还没有工具</EmptyTitle>
      <EmptyDescription>换一个标签看看，或稍后再来。</EmptyDescription>
    </EmptyHeader>
  </Empty>
</template>
