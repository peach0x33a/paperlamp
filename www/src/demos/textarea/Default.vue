<script setup lang="ts">
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
</script>

<template>
  <div class="grid w-full max-w-md gap-2">
    <Label for="comment">写一条评论</Label>
    <Textarea id="comment" placeholder="说说你用它做了什么，不必太正式。" />
  </div>
</template>
