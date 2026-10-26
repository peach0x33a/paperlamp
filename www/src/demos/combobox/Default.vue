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

const tags = ["Vue", "Canvas", "WebGPU", "音频", "本地运行", "无需登录", "开源"]
const tag = ref<string>()
</script>

<template>
  <div class="grid w-64 gap-2">
    <Label for="combobox-tag">搜索标签</Label>
    <Combobox v-model="tag">
      <ComboboxAnchor>
        <ComboboxInput id="combobox-tag" placeholder="输入标签名" />
        <ComboboxTrigger />
      </ComboboxAnchor>
      <ComboboxList>
        <ComboboxEmpty>没有找到这个标签</ComboboxEmpty>
        <ComboboxItem v-for="item in tags" :key="item" :value="item">
          {{ item }}
          <ComboboxItemIndicator />
        </ComboboxItem>
      </ComboboxList>
    </Combobox>
  </div>
</template>
