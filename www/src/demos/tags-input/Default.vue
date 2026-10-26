<script setup lang="ts">
import { ref } from "vue"
import { Label } from "@/components/ui/label"
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/components/ui/tags-input"

const tags = ref<string[]>(["小游戏", "Canvas"])
</script>

<template>
  <div class="grid w-full max-w-md gap-2">
    <Label for="tool-tags">给工具加标签</Label>
    <TagsInput id="tool-tags" v-model="tags" add-on-blur add-on-paste>
      <TagsInputItem v-for="item in tags" :key="item" :value="item">
        <TagsInputItemText>{{ item }}</TagsInputItemText>
        <TagsInputItemDelete :aria-label="`移除标签 ${item}`" />
      </TagsInputItem>
      <TagsInputInput placeholder="输入后按回车添加" />
    </TagsInput>
  </div>
</template>
