<script setup lang="ts">
import { Search } from "lucide-vue-next"
import { Kbd } from "@/components/ui/kbd"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
</script>

<template>
  <div class="w-full max-w-sm">
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <Search />
      </InputGroupAddon>
      <InputGroupInput placeholder="搜索工具、标签或作者" aria-label="搜索工具" />
      <InputGroupAddon align="inline-end">
        <Kbd>/</Kbd>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
