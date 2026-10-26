<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/sonner"
</script>

<template>
  <Button variant="outline" @click="toast('链接已复制')">
    复制链接
  </Button>
</template>
