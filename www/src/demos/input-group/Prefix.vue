<script setup lang="ts">
import { ref } from "vue"
import { Copy } from "lucide-vue-next"
import { Label } from "@/components/ui/label"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

const path = ref("lantern-tool")
</script>

<template>
  <div class="grid w-full max-w-sm gap-2">
    <Label for="tool-url">工具地址</Label>
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput id="tool-url" v-model="path" placeholder="your-tool" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton aria-label="复制地址">
          <Copy />
          复制
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
