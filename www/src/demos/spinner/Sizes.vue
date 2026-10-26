<script setup lang="ts">
import { Spinner } from "@/components/ui/spinner"
</script>

<template>
  <div class="flex items-center gap-6">
    <Spinner />
    <Spinner class="size-5" />
    <Spinner class="size-6" />
    <Spinner class="size-8 text-indigo" />
  </div>
</template>
