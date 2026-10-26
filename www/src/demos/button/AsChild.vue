<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next"
import { Button } from "@/components/ui/button"
</script>

<template>
  <Button as-child variant="outline">
    <a href="https://github.com/google-labs-code/design.md" target="_blank" rel="noreferrer">
      design.md 规范 <ArrowUpRight />
    </a>
  </Button>
</template>
