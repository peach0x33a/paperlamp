<script setup lang="ts">
import { ref } from "vue"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const sort = ref("latest")
const options = [
  { value: "latest", label: "最新收录" },
  { value: "featured", label: "精选优先" },
  { value: "quiet", label: "安静一点的" },
]
</script>

<template>
  <RadioGroup v-model="sort" aria-label="排序方式">
    <div v-for="option in options" :key="option.value" class="flex items-center gap-2">
      <RadioGroupItem :id="`sort-${option.value}`" :value="option.value" />
      <Label :for="`sort-${option.value}`">{{ option.label }}</Label>
    </div>
  </RadioGroup>
</template>
