<script setup lang="ts">
import { Box, Hash, Trophy, UserRound, Wrench } from "lucide-vue-next"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const tools = [
  { title: "便签墙", description: "把想法贴在一面纸上，按颜色分组。", href: "#" },
  { title: "像素时钟", description: "用一格一格的方块显示当前时间。", href: "#" },
  { title: "色块调色盘", description: "从一个颜色出发，列出相邻的几种。", href: "#" },
  { title: "词语接龙", description: "和朋友轮流接词，不许重复。", href: "#" },
]
</script>

<template>
  <div class="flex w-full max-w-2xl items-center gap-6 rounded-md border px-3">
    <div class="flex items-center gap-2 py-3 font-sans">
      <Box class="size-5" />
      <span class="font-bold">纸灯</span>
    </div>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            工具
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[28rem] grid-cols-2 gap-1 p-2">
              <li v-for="tool in tools" :key="tool.title">
                <NavigationMenuLink as-child>
                  <a :href="tool.href" class="flex flex-col gap-1 rounded-sm p-2 text-sm hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                    <span class="flex items-center gap-2 font-medium">
                      <Wrench class="size-4 shrink-0" />
                      {{ tool.title }}
                    </span>
                    <span class="text-xs text-muted-foreground">{{ tool.description }}</span>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink as-child>
            <a href="#" :class="navigationMenuTriggerStyle()">
              <Hash class="mr-1 size-4" />
              标签
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink as-child>
            <a href="#" :class="navigationMenuTriggerStyle()">
              <Trophy class="mr-1 size-4" />
              排行榜
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink as-child>
            <a href="#" :class="navigationMenuTriggerStyle()">
              <UserRound class="mr-1 size-4" />
              关于
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</template>
