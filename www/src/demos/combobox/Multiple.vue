<script setup lang="ts">
import { ref } from "vue"
import { Label } from "@/components/ui/label"
import {
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxTrigger,
} from "@/components/ui/combobox"

const tools = ["文字转图", "配色实验", "声音采样", "迷你游戏", "诗句生成"]
const picked = ref<string[]>(["配色实验"])
</script>

<template>
  <div class="grid w-64 gap-2">
    <Label for="combobox-tools">选择工具</Label>
    <Combobox v-model="picked" multiple>
      <ComboboxAnchor>
        <ComboboxInput id="combobox-tools" placeholder="搜索工具名" />
        <ComboboxTrigger />
      </ComboboxAnchor>
      <ComboboxList>
        <ComboboxEmpty>没有找到这个工具</ComboboxEmpty>
        <ComboboxItem v-for="item in tools" :key="item" :value="item">
          {{ item }}
          <ComboboxItemIndicator />
        </ComboboxItem>
      </ComboboxList>
    </Combobox>
    <p class="label-sm text-muted-foreground">
      已选 {{ picked.length }} 个工具
    </p>
  </div>
</template>
