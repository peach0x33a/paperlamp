<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
</script>

<template>
  <Avatar>
    <AvatarImage src="https://github.com/vuejs.png" alt="Vue" />
    <AvatarFallback>V</AvatarFallback>
  </Avatar>
</template>
