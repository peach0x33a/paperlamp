<script setup lang="ts">
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
</script>

<template>
  <div class="flex max-w-md items-start gap-3">
    <Avatar>
      <AvatarFallback>墨</AvatarFallback>
    </Avatar>
    <div class="grid gap-1">
      <div class="flex items-baseline gap-2">
        <span class="font-bold">墨鱼</span>
        <span class="label-sm text-muted-foreground">2026-10-24</span>
      </div>
      <p class="body-sm">
        让它给我起了二十个猫的名字，其中三个真的用上了。
      </p>
    </div>
  </div>
</template>
