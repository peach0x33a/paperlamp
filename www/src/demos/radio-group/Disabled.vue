<script setup lang="ts">
import { ref } from "vue"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const visibility = ref("public")
</script>

<template>
  <RadioGroup v-model="visibility" aria-label="可见范围">
    <div class="flex items-center gap-2">
      <RadioGroupItem id="visibility-public" value="public" />
      <Label for="visibility-public">所有人可见</Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem id="visibility-private" value="private" />
      <Label for="visibility-private">只有自己可见</Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem id="visibility-review" value="review" disabled />
      <Label for="visibility-review" class="text-muted-foreground">审核中，暂不可选</Label>
    </div>
  </RadioGroup>
</template>
