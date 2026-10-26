<script setup lang="ts">
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const names = ["墨鱼", "小镇居民", "Nora", "阿土"]
</script>

<template>
  <div class="flex items-center gap-3">
    <Avatar v-for="name in names" :key="name">
      <AvatarFallback>{{ name.charAt(0) }}</AvatarFallback>
    </Avatar>
  </div>
</template>
