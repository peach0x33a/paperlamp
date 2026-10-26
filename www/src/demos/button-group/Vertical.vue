<script setup lang="ts">
import { Minus, Plus, RotateCcw } from "lucide-vue-next"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
</script>

<template>
  <ButtonGroup orientation="vertical" aria-label="缩放">
    <Button variant="outline" size="icon" aria-label="放大">
      <Plus />
    </Button>
    <Button variant="outline" size="icon" aria-label="重置缩放">
      <RotateCcw />
    </Button>
    <Button variant="outline" size="icon" aria-label="缩小">
      <Minus />
    </Button>
  </ButtonGroup>
</template>
