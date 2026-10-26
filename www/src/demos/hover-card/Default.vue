<script setup lang="ts">
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
</script>

<template>
  <p class="body-md">
    这个小镇是
    <HoverCard :open-delay="200">
      <HoverCardTrigger as-child>
        <a href="#" class="font-mono text-indigo-text underline-offset-4 hover:text-indigo hover:underline rounded-sm outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">@lantern</a>
      </HoverCardTrigger>
      <HoverCardContent class="grid gap-2">
        <p class="title-md">lantern</p>
        <p class="body-sm text-muted-foreground">
          写一些只用文字和一个画布的小工具。周末做，偶尔更新。
        </p>
        <p class="font-mono label-sm text-muted-foreground">
          工具 3 个 · 最近更新 2026-10-18
        </p>
      </HoverCardContent>
    </HoverCard>
    在周末写的。
  </p>
</template>
