<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field"

const count = ref(3)
const working = ref(false)

function generate() {
  working.value = true
  setTimeout(() => (working.value = false), 1200)
}
</script>

<template>
  <div class="grid w-64 gap-3">
    <div class="grid gap-2">
      <Label for="number-generate">生成数量</Label>
      <NumberField id="number-generate" v-model="count" :min="1" :max="8">
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
      <p class="label-sm text-muted-foreground">
        一次最多生成 8 个
      </p>
    </div>
    <Button :disabled="working" @click="generate">
      {{ working ? "生成中" : "生成 " + count + " 个" }}
    </Button>
  </div>
</template>
