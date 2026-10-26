<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const open = ref(false)
</script>

<template>
  <Collapsible v-model:open="open" class="w-full max-w-sm space-y-2">
    <div class="flex items-center justify-between gap-4">
      <p class="title-md">标签：文字</p>
      <CollapsibleTrigger as-child>
        <Button variant="bracket">{{ open ? "收起" : "展开" }}</Button>
      </CollapsibleTrigger>
    </div>
    <CollapsibleContent class="space-y-2">
      <p class="body-sm">猫名字典 · 古诗接龙 · 俳句时钟</p>
      <p class="body-sm text-muted-foreground">这一组都是只用文字的小工具。</p>
    </CollapsibleContent>
  </Collapsible>
</template>
