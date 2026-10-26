<script setup lang="ts">
import { ref } from "vue"
import { Pin, Star } from "lucide-vue-next"
import { Toggle } from "@/components/ui/toggle"

const favorite = ref(true)
const pinned = ref(false)
</script>

<template>
  <div class="flex items-center gap-2">
    <Toggle v-model="favorite" aria-label="收藏">
      <Star />
      收藏
    </Toggle>
    <Toggle v-model="pinned" aria-label="置顶">
      <Pin />
      置顶
    </Toggle>
  </div>
</template>
