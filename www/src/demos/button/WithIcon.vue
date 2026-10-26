<script setup lang="ts">
import { LoaderCircle, Share2 } from "lucide-vue-next"
import { ref } from "vue"
import { Button } from "@/components/ui/button"

const loading = ref(false)
function submit() {
  loading.value = true
  setTimeout(() => (loading.value = false), 1600)
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Button variant="outline">
      <Share2 /> 分享
    </Button>
    <Button :disabled="loading" @click="submit">
      <LoaderCircle v-if="loading" class="animate-spin" />
      {{ loading ? "提交中" : "提交评论" }}
    </Button>
  </div>
</template>
