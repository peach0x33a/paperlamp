<script setup lang="ts">
import { ref } from "vue"
import { TagChipGroup, TagChipGroupItem } from "@/components/ui/tag-chip"

const tags = ["全部", "小游戏", "效率", "可视化", "整活", "学习"]
const current = ref("全部")
</script>

<template>
  <div class="grid gap-4">
    <TagChipGroup v-model="current" type="single" aria-label="按标签筛选">
      <TagChipGroupItem v-for="tag in tags" :key="tag" :value="tag">
        {{ tag }}
      </TagChipGroupItem>
    </TagChipGroup>
    <p class="label-sm text-muted-foreground">
      当前：{{ current || "未选择" }}
    </p>
  </div>
</template>
