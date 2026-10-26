<script setup lang="ts">
import { Badge } from "@/components/ui/badge"
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Badge as-child variant="outline">
      <a href="#changelog">更新日志</a>
    </Badge>
    <Badge as-child>
      <a href="#admin">admin</a>
    </Badge>
  </div>
</template>
