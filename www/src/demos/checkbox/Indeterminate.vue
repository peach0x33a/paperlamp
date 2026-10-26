<script setup lang="ts">
import { computed, ref } from "vue"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const tags = ["小游戏", "效率工具", "可视化"]
const picked = ref<string[]>(["效率工具"])

const allState = computed(() => {
  if (picked.value.length === 0) return false
  if (picked.value.length === tags.length) return true
  return "indeterminate" as const
})

function setAll(value: boolean | "indeterminate") {
  picked.value = value === true ? [...tags] : []
}

function setTag(tag: string, value: boolean | "indeterminate") {
  picked.value = value === true
    ? [...picked.value, tag]
    : picked.value.filter(item => item !== tag)
}
</script>

<template>
  <div class="grid gap-3">
    <div class="flex items-center gap-2">
      <Checkbox id="tags-all" :model-value="allState" @update:model-value="setAll" />
      <Label for="tags-all">全部标签</Label>
    </div>
    <div class="grid gap-2 pl-6">
      <div v-for="tag in tags" :key="tag" class="flex items-center gap-2">
        <Checkbox
          :id="`tag-${tag}`"
          :model-value="picked.includes(tag)"
          @update:model-value="(value) => setTag(tag, value)"
        />
        <Label :for="`tag-${tag}`">{{ tag }}</Label>
      </div>
    </div>
  </div>
</template>
