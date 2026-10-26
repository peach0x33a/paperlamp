<script setup lang="ts">
import { ref } from "vue"
import { LayoutGrid, List } from "lucide-vue-next"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const view = ref("grid")
</script>

<template>
  <ToggleGroup v-model="view" type="single" variant="outline" aria-label="视图">
    <ToggleGroupItem value="grid" aria-label="网格视图">
      <LayoutGrid />
      网格
    </ToggleGroupItem>
    <ToggleGroupItem value="list" aria-label="列表视图">
      <List />
      列表
    </ToggleGroupItem>
  </ToggleGroup>
</template>
