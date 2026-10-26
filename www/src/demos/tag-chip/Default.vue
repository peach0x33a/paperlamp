<script setup lang="ts">
import { ref } from "vue"
import { TagChip } from "@/components/ui/tag-chip"

const pressed = ref(true)
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <TagChip v-model="pressed">
      #小游戏
    </TagChip>
    <TagChip>#文字处理</TagChip>
    <TagChip disabled>
      #已下架
    </TagChip>
  </div>
</template>
