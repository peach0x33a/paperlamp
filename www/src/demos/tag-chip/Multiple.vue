<script setup lang="ts">
import { ref } from "vue"
import { TagChipGroup, TagChipGroupItem } from "@/components/ui/tag-chip"

const tags = ["Vue", "Canvas", "WebGPU", "音频", "本地运行", "无需登录"]
const picked = ref(["Canvas", "无需登录"])
</script>

<template>
  <div class="grid gap-4">
    <TagChipGroup v-model="picked" type="multiple" size="sm" aria-label="技术标签">
      <TagChipGroupItem v-for="tag in tags" :key="tag" :value="tag">
        {{ tag }}
      </TagChipGroupItem>
    </TagChipGroup>
    <p class="label-sm text-muted-foreground">
      已选 {{ picked.length }} 个标签
    </p>
  </div>
</template>
