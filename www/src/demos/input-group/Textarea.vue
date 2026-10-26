<script setup lang="ts">
import { computed, ref } from "vue"
import { Label } from "@/components/ui/label"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group"

const comment = ref("")
const length = computed(() => [...comment.value].length)
</script>

<template>
  <div class="grid w-full max-w-md gap-2">
    <Label for="tool-comment">留下评论</Label>
    <InputGroup>
      <InputGroupTextarea
        id="tool-comment"
        v-model="comment"
        placeholder="这个小工具哪里让你停下来了？"
      />
      <InputGroupAddon align="block-end">
        <span class="font-mono text-xs text-muted-foreground tabular-nums">{{ length }} 字</span>
        <InputGroupButton variant="default" class="ml-auto" :disabled="length === 0">
          发表评论
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
