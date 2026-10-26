<script setup lang="ts">
import { computed, ref } from "vue"
import { Label } from "@/components/ui/label"
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/components/ui/tags-input"

const tags = ref<string[]>(["解谜"])
const remaining = computed(() => 3 - tags.value.length)
</script>

<template>
  <div class="grid w-full max-w-md gap-2">
    <Label for="tool-tags-max">推荐标签（最多 3 个）</Label>
    <TagsInput id="tool-tags-max" v-model="tags" :max="3" add-on-blur add-on-paste>
      <TagsInputItem v-for="item in tags" :key="item" :value="item">
        <TagsInputItemText>{{ item }}</TagsInputItemText>
        <TagsInputItemDelete :aria-label="`移除标签 ${item}`" />
      </TagsInputItem>
      <TagsInputInput :placeholder="remaining > 0 ? `还能加 ${remaining} 个` : '已达上限'" />
    </TagsInput>
    <p class="body-sm text-muted-foreground">已满时输入框不再接受新标签，删除一个即可继续添加。</p>
  </div>
</template>
