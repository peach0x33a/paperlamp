<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const sides = ["top", "right", "bottom", "left"] as const
</script>

<template>
  <TooltipProvider>
    <div class="grid grid-cols-2 gap-6 justify-items-center">
      <Tooltip v-for="side in sides" :key="side">
        <TooltipTrigger as-child>
          <Button variant="outline">
            {{ side }}
          </Button>
        </TooltipTrigger>
        <TooltipContent :side="side">
          在{{ { top: "上方", right: "右侧", bottom: "下方", left: "左侧" }[side] }}显示
        </TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
</template>
