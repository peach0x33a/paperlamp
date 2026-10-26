<script setup lang="ts">
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
</script>

<template>
  <div class="grid w-full max-w-sm gap-2">
    <Label for="tool-name">工具名称</Label>
    <Input id="tool-name" placeholder="比如：会唱歌的表格" />
  </div>
</template>
