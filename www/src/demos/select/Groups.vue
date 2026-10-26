<script setup lang="ts">
import { ref } from "vue"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const runtime = ref("")
</script>

<template>
  <div class="grid w-64 gap-2">
    <Label for="select-runtime">运行环境</Label>
    <Select v-model="runtime">
      <SelectTrigger id="select-runtime" class="w-full">
        <SelectValue placeholder="在哪里运行" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>在浏览器里</SelectLabel>
          <SelectItem value="browser">
            直接打开
          </SelectItem>
          <SelectItem value="webgpu" disabled>
            WebGPU（需要显卡支持）
          </SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>在本地</SelectLabel>
          <SelectItem value="bun">
            Bun
          </SelectItem>
          <SelectItem value="node">
            Node.js
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
