<script setup lang="ts">
import { ref } from "vue"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const onlyFeatured = ref(true)
const hideMaintenance = ref(false)
</script>

<template>
  <div class="grid gap-4">
    <div class="flex items-center gap-2">
      <Checkbox id="only-featured" v-model="onlyFeatured" />
      <Label for="only-featured">只看精选</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox id="hide-maintenance" v-model="hideMaintenance" />
      <Label for="hide-maintenance">隐藏维护中的工具</Label>
    </div>
  </div>
</template>
