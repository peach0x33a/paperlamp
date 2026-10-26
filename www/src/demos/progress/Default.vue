<script setup lang="ts">
import { onMounted, ref } from "vue"
import { Progress } from "@/components/ui/progress"

const value = ref(12)
onMounted(() => setTimeout(() => (value.value = 64), 400))
</script>

<template>
  <Progress v-model="value" class="w-72" />
</template>
