<script setup lang="ts">
import { useCarousel } from "@/components/ui/carousel"

// Reads embla's live state through the context, so the numbers are real.
const { selectedIndex, slideCount } = useCarousel()
</script>

<template>
  <p class="label-sm text-center text-muted-foreground">
    第 {{ selectedIndex + 1 }} / {{ slideCount }} 张
  </p>
</template>
