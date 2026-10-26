<script setup lang="ts">
import { ChevronLeft, ChevronRight } from "lucide-vue-next"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group"
</script>

<template>
  <ButtonGroup aria-label="翻页">
    <Button variant="outline" aria-label="上一个">
      <ChevronLeft />
      上一个
    </Button>
    <ButtonGroupText>第 3 / 12 个</ButtonGroupText>
    <Button variant="outline" aria-label="下一个">
      下一个
      <ChevronRight />
    </Button>
  </ButtonGroup>
</template>
