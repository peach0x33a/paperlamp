<script setup lang="ts">
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
</script>

<template>
  <div class="grid w-full max-w-sm gap-2">
    <Label for="tool-archived">作者</Label>
    <Input id="tool-archived" default-value="墨尔" disabled />
  </div>
</template>
