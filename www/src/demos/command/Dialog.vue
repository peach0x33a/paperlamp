<script setup lang="ts">
import { useEventListener } from "@vueuse/core"
import { ref } from "vue"
import { Hash, Moon, Wrench } from "lucide-vue-next"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

const open = ref(false)

useEventListener(window, "keydown", (event: KeyboardEvent) => {
  if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
    event.preventDefault()
    open.value = !open.value
  }
})
</script>

<template>
  <div class="grid w-full max-w-md gap-4">
    <div class="flex flex-wrap items-center gap-3">
      <Button variant="outline" @click="open = true">
        打开命令面板
      </Button>
      <p class="flex items-center gap-2 text-sm text-muted-foreground">
        也可以按
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span class="text-muted-foreground">/</span>
          <Kbd>⌘</Kbd>
          <span class="text-muted-foreground">+</span>
          <Kbd>K</Kbd>
        </KbdGroup>
        唤起。
      </p>
    </div>

    <CommandDialog v-model:open="open" title="命令面板" description="搜索工具、标签或命令">
      <CommandInput placeholder="搜索工具、标签或命令" />
      <CommandList>
        <CommandEmpty>没有找到匹配的工具、标签或命令。</CommandEmpty>
        <CommandGroup heading="工具">
          <CommandItem value="草稿墙" @select="open = false">
            <Wrench />
            草稿墙
          </CommandItem>
          <CommandItem value="配色盘" @select="open = false">
            <Wrench />
            配色盘
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="标签">
          <CommandItem value="生成 #生成" :keywords="['生成']" @select="open = false">
            <Hash />
            生成
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="命令">
          <CommandItem value="切换深色模式" @select="open = false">
            <Moon />
            切换深色模式
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </div>
</template>
