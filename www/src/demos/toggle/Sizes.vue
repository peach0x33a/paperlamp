<script setup lang="ts">
import { Eye } from "lucide-vue-next"
import { Toggle } from "@/components/ui/toggle"
</script>

<template>
  <div class="flex items-center gap-2">
    <Toggle size="sm" variant="outline" aria-label="显示细节">
      <Eye />
      小
    </Toggle>
    <Toggle variant="outline" aria-label="显示细节">
      <Eye />
      默认
    </Toggle>
    <Toggle size="lg" variant="outline" aria-label="显示细节">
      <Eye />
      大
    </Toggle>
  </div>
</template>
