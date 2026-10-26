<script setup lang="ts">
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
</script>

<template>
  <div class="grid gap-4">
    <div class="flex items-center gap-2">
      <Checkbox id="archived-disabled" disabled />
      <Label for="archived-disabled">已下架的工具也显示</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox id="archived-disabled-on" disabled :default-value="true" />
      <Label for="archived-disabled-on">仅在维护期间可修改</Label>
    </div>
  </div>
</template>
