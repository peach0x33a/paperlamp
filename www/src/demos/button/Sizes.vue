<script setup lang="ts">
import { Plus } from "lucide-vue-next"
import { Button } from "@/components/ui/button"
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Button size="sm">
      小
    </Button>
    <Button>默认</Button>
    <Button size="lg">
      大
    </Button>
    <Button size="icon-sm" variant="outline" aria-label="新增">
      <Plus />
    </Button>
    <Button size="icon" variant="outline" aria-label="新增">
      <Plus />
    </Button>
    <Button size="icon-lg" variant="outline" aria-label="新增">
      <Plus />
    </Button>
  </div>
</template>
