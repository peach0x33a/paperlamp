<script setup lang="ts">
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
</script>

<template>
  <div class="grid w-full max-w-sm gap-2">
    <Label for="tool-slug">链接名</Label>
    <Input id="tool-slug" default-value="sing-table" aria-invalid="true" aria-describedby="tool-slug-error" />
    <p id="tool-slug-error" class="body-sm text-destructive">
      这个链接名已经被另一个工具用了，换一个试试。
    </p>
  </div>
</template>
