<script setup lang="ts">
import { ref } from "vue"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const sort = ref("updated")
</script>

<template>
  <div class="grid w-64 gap-2">
    <Label for="select-sort">排序方式</Label>
    <Select v-model="sort">
      <SelectTrigger id="select-sort" class="w-full">
        <SelectValue placeholder="选一种排序" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="updated">
          最近更新
        </SelectItem>
        <SelectItem value="starred">
          最多收藏
        </SelectItem>
        <SelectItem value="name">
          按名称
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
