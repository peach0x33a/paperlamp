<script setup lang="ts">
import { ClipboardCheck, EyeOff, LayoutGrid, Tags, Trophy } from "lucide-vue-next"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const pending = ["帧间去抖", "猫咪文字生成器", "雨声合成台"]
</script>

<template>
  <div class="h-[28rem] w-full overflow-hidden rounded-md border">
    <SidebarProvider class="h-full min-h-0" :default-open="true" cookie-name="sidebar_admin_state">
      <Sidebar contained>
        <SidebarHeader>
          <div class="flex items-center gap-2 px-2 py-1.5">
            <span class="headline-md leading-none">幻觉产物</span>
            <span class="font-mono label-xs text-muted-foreground">admin</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>浏览</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="全部工具" :is-active="true">
                    <LayoutGrid />
                    <span>全部工具</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="排行榜">
                    <Trophy />
                    <span>排行榜</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="标签">
                    <Tags />
                    <span>标签</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>管理</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="待审核">
                    <ClipboardCheck />
                    <span>待审核</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>{{ pending.length }}</SidebarMenuBadge>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="隐藏的工具">
                    <EyeOff />
                    <span>隐藏的工具</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div class="flex items-center gap-2 px-2 py-1.5">
            <Avatar class="size-8">
              <AvatarFallback>墨</AvatarFallback>
            </Avatar>
            <div class="flex min-w-0 flex-col">
              <span class="text-sm font-bold">小墨</span>
              <span class="font-mono label-xs text-muted-foreground">管理员</span>
            </div>
          </div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset class="min-h-0">
        <header class="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span class="font-mono label-sm text-muted-foreground">全部工具</span>
        </header>
        <div class="flex flex-1 flex-col gap-2 p-6">
          <h2 class="title-md">待审核</h2>
          <ul v-if="pending.length" class="space-y-1 body-sm">
            <li v-for="name in pending" :key="name">{{ name }}</li>
          </ul>
          <p v-else class="body-sm text-muted-foreground">没有待审核的工具，今天可以歇一歇。</p>
          <div class="mt-auto">
            <Button variant="outline" size="sm">查看全部待审核</Button>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  </div>
</template>
