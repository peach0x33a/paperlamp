<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"

const open = ref(false)
</script>

<template>
  <div class="grid w-full max-w-sm gap-3">
    <Collapsible v-model:open="open">
      <CollapsibleContent>
        <p class="body-sm">更新内容很多，这里先收起，点下面的按钮再看。</p>
      </CollapsibleContent>
    </Collapsible>
    <Button variant="outline" class="justify-self-start" @click="open = !open">
      {{ open ? "收起更新" : "展开更新" }}
    </Button>
  </div>
</template>
