<script setup lang="ts">
import { Button } from "@/components/ui/button"
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Button>Default</Button>
    <Button variant="secondary">
      Secondary
    </Button>
    <Button variant="outline">
      Outline
    </Button>
    <Button variant="ghost">
      Ghost
    </Button>
    <Button variant="destructive">
      删除
    </Button>
    <Button variant="link">
      Link
    </Button>
  </div>
</template>
