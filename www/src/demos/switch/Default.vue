<script setup lang="ts">
import { ref } from "vue"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const onlyFeatured = ref(false)
const hideMaintenance = ref(true)
</script>

<template>
  <div class="grid gap-4">
    <div class="flex items-center justify-between gap-6">
      <Label for="switch-featured">只看精选</Label>
      <Switch id="switch-featured" v-model="onlyFeatured" />
    </div>
    <div class="flex items-center justify-between gap-6">
      <Label for="switch-maintenance">隐藏维护中的工具</Label>
      <Switch id="switch-maintenance" v-model="hideMaintenance" />
    </div>
  </div>
</template>
