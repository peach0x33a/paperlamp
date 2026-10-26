<script setup lang="ts">
import { ref } from "vue"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MenubarLabel,
} from "@/components/ui/menubar"

const focusMode = ref(false)
const theme = ref("system")
</script>

<template>
  <div class="w-full max-w-2xl overflow-hidden rounded-md border">
    <Menubar class="rounded-none border-0 border-b shadow-none">
      <MenubarMenu>
        <MenubarTrigger>文件</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            新建便签
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            导出为图片
            <MenubarShortcut>⌘E</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">
            删除这份草稿
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>视图</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem v-model="focusMode">
            专注模式
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarLabel>主题</MenubarLabel>
          <MenubarRadioGroup v-model="theme">
            <MenubarRadioItem value="light">
              亮色
            </MenubarRadioItem>
            <MenubarRadioItem value="dark">
              暗色
            </MenubarRadioItem>
            <MenubarRadioItem value="system">
              跟随系统
            </MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>工具</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            复制嵌入代码
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>分享到</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>复制链接</MenubarItem>
              <MenubarItem>生成二维码</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>

    <div class="flex h-48 items-center justify-center p-6 text-sm text-muted-foreground">
      {{ focusMode ? "专注模式已开启，工具栏会收起。" : "专注模式已关闭。" }}
    </div>
  </div>
</template>
