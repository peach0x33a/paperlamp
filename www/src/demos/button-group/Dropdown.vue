<script setup lang="ts">
import { Archive, Bell, ChevronDown, Pencil, Trash2 } from "lucide-vue-next"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
</script>

<template>
  <ButtonGroup>
    <Button variant="outline">
      <Pencil />
      编辑工具
    </Button>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="outline" size="icon" aria-label="更多操作">
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" class="w-44">
        <DropdownMenuItem>
          <Bell />
          订阅更新
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Archive />
          暂时下架
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem class="text-destructive">
          <Trash2 />
          删除工具
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </ButtonGroup>
</template>
