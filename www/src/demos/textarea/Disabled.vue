<script setup lang="ts">
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
</script>

<template>
  <div class="grid w-full max-w-md gap-2">
    <Label for="comment-locked">评论已关闭</Label>
    <Textarea id="comment-locked" disabled placeholder="这个工具正在维护，暂时不能评论。" />
  </div>
</template>
