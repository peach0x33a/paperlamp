<script setup lang="ts">
import { Ghost } from "lucide-vue-next"
import { Button } from "@/components/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
</script>

<template>
  <Empty class="w-full max-w-lg">
    <EmptyHeader>
      <EmptyMedia>
        <Ghost />
      </EmptyMedia>
      <EmptyTitle>还没有人评论</EmptyTitle>
      <EmptyDescription>玩过之后说两句吧，好坏都行。</EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button variant="outline">
        写第一条评论
      </Button>
    </EmptyContent>
  </Empty>
</template>
