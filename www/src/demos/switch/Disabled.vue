<script setup lang="ts">
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
</script>

<template>
  <div class="grid gap-4">
    <div class="flex items-center justify-between gap-6">
      <Label for="switch-locked-off">自动同步收藏</Label>
      <Switch id="switch-locked-off" disabled />
    </div>
    <div class="flex items-center justify-between gap-6">
      <Label for="switch-locked-on">显示内容警告</Label>
      <Switch id="switch-locked-on" disabled :default-value="true" />
    </div>
  </div>
</template>
