<script setup lang="ts">
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox id="label-demo" />
    <Label for="label-demo">点击文字也能勾选</Label>
  </div>
</template>
