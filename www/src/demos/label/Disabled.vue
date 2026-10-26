<script setup lang="ts">
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox id="label-disabled" disabled />
    <Label for="label-disabled">这一项暂时不能修改</Label>
  </div>
</template>
