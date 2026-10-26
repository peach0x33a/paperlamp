<script setup lang="ts">
import { ref } from "vue"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const picked = ref<string[]>(["offline"])
</script>

<template>
  <ToggleGroup v-model="picked" type="multiple" variant="outline" size="sm" aria-label="使用条件">
    <ToggleGroupItem value="offline">
      可离线
    </ToggleGroupItem>
    <ToggleGroupItem value="no-login">
      无需登录
    </ToggleGroupItem>
    <ToggleGroupItem value="open-source">
      开源
    </ToggleGroupItem>
  </ToggleGroup>
</template>
