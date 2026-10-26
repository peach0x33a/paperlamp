<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/sonner"

function remove() {
  toast("评论已删除", {
    description: "2026-10-26 03:15",
    action: { label: "撤销", onClick: () => toast("已恢复") },
  })
}
</script>

<template>
  <Button variant="outline" @click="remove">
    删除评论
  </Button>
</template>
