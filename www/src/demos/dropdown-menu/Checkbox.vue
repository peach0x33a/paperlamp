<script setup lang="ts">
import { ref } from "vue"
import { LayoutGrid, List } from "lucide-vue-next"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const showMaintenance = ref(false)
const showCovers = ref(true)
const layout = ref("grid")
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        显示设置
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" class="w-52">
      <DropdownMenuLabel>卡片内容</DropdownMenuLabel>
      <DropdownMenuCheckboxItem v-model="showCovers">
        显示封面
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem v-model="showMaintenance">
        显示维护中的工具
      </DropdownMenuCheckboxItem>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>排列方式</DropdownMenuLabel>
      <DropdownMenuRadioGroup v-model="layout">
        <DropdownMenuRadioItem value="grid">
          <LayoutGrid />
          网格
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="list">
          <List />
          列表
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
