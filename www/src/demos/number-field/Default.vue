<script setup lang="ts">
import { ref } from "vue"
import { Label } from "@/components/ui/label"
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field"

const perPage = ref(20)
</script>

<template>
  <div class="grid w-64 gap-2">
    <Label for="number-per-page">每页显示数量</Label>
    <NumberField id="number-per-page" v-model="perPage" :min="10" :max="100" :step="10">
      <NumberFieldContent>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldContent>
    </NumberField>
  </div>
</template>
