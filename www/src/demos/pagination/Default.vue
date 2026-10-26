<script setup lang="ts">
import { ref } from "vue"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const page = ref(2)
</script>

<template>
  <Pagination v-slot="{ pageCount }" v-model:page="page" :total="36" :items-per-page="6" :sibling-count="1">
    <PaginationContent v-slot="{ items }">
      <PaginationPrevious />
      <template v-for="(item, index) in items">
        <PaginationItem v-if="item.type === 'page'" :key="index" :value="item.value" :is-active="item.value === page">
          {{ item.value }}
        </PaginationItem>
      </template>
      <PaginationNext />
    </PaginationContent>
    <span class="sr-only">共 {{ pageCount }} 页</span>
  </Pagination>
</template>
