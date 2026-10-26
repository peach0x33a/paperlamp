<script setup lang="ts">
import { Gamepad2 } from "lucide-vue-next"
import { AspectRatio } from "@/components/ui/aspect-ratio"
</script>

<template>
  <div class="w-40 overflow-hidden rounded-md border">
    <AspectRatio :ratio="1">
      <div class="flex size-full items-center justify-center bg-muted text-muted-foreground" role="img" aria-label="小游戏图标（示意）">
        <Gamepad2 class="size-8" />
      </div>
    </AspectRatio>
  </div>
</template>
