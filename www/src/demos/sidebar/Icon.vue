<script setup lang="ts">
import { LayoutGrid, Tags, Trophy } from "lucide-vue-next"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
</script>

<template>
  <div class="h-[28rem] w-full overflow-hidden rounded-md border">
    <SidebarProvider class="h-full min-h-0" :default-open="false" cookie-name="sidebar_icon_state">
      <Sidebar contained collapsible="icon">
        <SidebarHeader>
          <div class="flex h-8 items-center px-2 font-mono label-sm">纸</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
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
        </SidebarContent>
      </Sidebar>
      <SidebarInset class="min-h-0">
        <header class="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span class="font-mono label-sm text-muted-foreground">点击左上角按钮切换侧栏</span>
        </header>
        <div class="p-6 body-sm text-muted-foreground">
          收起后悬停图标显示名称。展开状态保存在 cookie 中。
        </div>
      </SidebarInset>
    </SidebarProvider>
  </div>
</template>
