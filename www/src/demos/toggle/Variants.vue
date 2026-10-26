<script setup lang="ts">
import { Bold } from "lucide-vue-next"
import { Toggle } from "@/components/ui/toggle"
</script>

<template>
  <div class="flex items-center gap-2">
    <Toggle aria-label="加粗" :default-value="true">
      <Bold />
    </Toggle>
    <Toggle variant="outline" aria-label="加粗（带边框）">
      <Bold />
    </Toggle>
    <Toggle variant="outline">
      带边框的切换
    </Toggle>
  </div>
</template>
