<script setup lang="ts">
import { Clock, Hash, Moon, Wrench } from "lucide-vue-next"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
</script>

<template>
  <div class="w-full max-w-md overflow-hidden rounded-md border shadow-sm">
    <Command>
      <CommandInput placeholder="搜索工具、标签或命令" />
      <CommandList>
        <CommandEmpty>没有找到匹配的工具、标签或命令。</CommandEmpty>
        <CommandGroup heading="工具">
          <CommandItem value="便签墙">
            <Wrench />
            便签墙
          </CommandItem>
          <CommandItem value="像素时钟">
            <Clock />
            像素时钟
          </CommandItem>
          <CommandItem value="色块调色盘">
            <Wrench />
            色块调色盘
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="标签">
          <CommandItem value="生成 #生成" :keywords="['生成']">
            <Hash />
            生成
          </CommandItem>
          <CommandItem value="小游戏 #小游戏" :keywords="['游戏']">
            <Hash />
            小游戏
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="命令">
          <CommandItem value="切换深色模式">
            <Moon />
            切换深色模式
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </div>
</template>
