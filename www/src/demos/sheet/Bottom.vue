<script setup lang="ts">
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline">
        查看更新日志
      </Button>
    </SheetTrigger>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>更新日志</SheetTitle>
        <SheetDescription>像素小镇生成器最近的两次改动。</SheetDescription>
      </SheetHeader>
      <ol class="grid gap-2 body-sm">
        <li>2026-10-18 新增「居民作息」：晚上会回家睡觉。</li>
        <li>2026-08-27 首次上线。</li>
      </ol>
    </SheetContent>
  </Sheet>
</template>
