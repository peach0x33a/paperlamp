<script setup lang="ts">
import { RatingStars } from "@/components/ui/rating"
</script>

<template>
  <div class="grid gap-3">
    <RatingStars :value="4.6" />
    <RatingStars :value="3.2" />
    <RatingStars :value="null" />
  </div>
</template>
