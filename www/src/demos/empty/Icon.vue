<script setup lang="ts">
import { SearchX } from "lucide-vue-next"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
</script>

<template>
  <Empty class="w-full max-w-lg">
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <SearchX />
      </EmptyMedia>
      <EmptyTitle>没有搜到「时光机」</EmptyTitle>
      <EmptyDescription>试试更短的关键词，或者<a href="#submit">推荐一个工具</a>。</EmptyDescription>
    </EmptyHeader>
  </Empty>
</template>
