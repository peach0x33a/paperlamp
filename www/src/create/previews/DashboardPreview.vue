<script setup lang="ts">
import { VisArea, VisAxis, VisXYContainer } from "@unovis/vue"
import { BarChart3, FileText, Inbox, LayoutDashboard, Search, Settings, Users } from "lucide-vue-next"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { ChartConfig } from "@/components/ui/chart"
import { ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
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
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// A generic SaaS dashboard; all figures are made up.
const nav = [
  { icon: LayoutDashboard, label: "概览", active: true },
  { icon: BarChart3, label: "分析" },
  { icon: Users, label: "客户" },
  { icon: FileText, label: "文档" },
  { icon: Inbox, label: "收件箱", badge: 12 },
]
const stats = [
  { label: "总收入", value: "¥1,250.00", delta: "+12.5%", note: "比上月增长" },
  { label: "新客户", value: "1,234", delta: "-20%", note: "获客放缓" },
  { label: "活跃账号", value: "45,678", delta: "+12.5%", note: "留存稳定" },
  { label: "增长率", value: "4.5%", delta: "+4.5%", note: "符合预期" },
]
interface Day { day: number, desktop: number, mobile: number }
const visits: Day[] = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  desktop: Math.round(180 + 80 * Math.sin(i / 3) + i * 4),
  mobile: Math.round(120 + 60 * Math.cos(i / 4) + i * 3),
}))
const visitConfig = {
  desktop: { label: "桌面端", color: "var(--primary)" },
  mobile: { label: "移动端", color: "color-mix(in oklab, var(--primary) 45%, transparent)" },
} satisfies ChartConfig
const rows = [
  { title: "封面与目录", type: "目录", status: "完成", target: 18, owner: "林晓" },
  { title: "执行摘要", type: "叙述", status: "进行中", target: 10, owner: "陈默" },
  { title: "技术方案", type: "叙述", status: "进行中", target: 27, owner: "周宁" },
  { title: "设计规范", type: "叙述", status: "完成", target: 2, owner: "林晓" },
  { title: "能力说明", type: "叙述", status: "待开始", target: 20, owner: "陈默" },
]
</script>

<template>
  <SidebarProvider :default-open="true" cookie-name="preview_sidebar_state">
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div class="flex items-center gap-2 px-2 py-1.5">
          <span class="grid size-7 place-items-center rounded-sm bg-primary font-bold text-primary-foreground">A</span>
          <span class="truncate font-bold group-data-[collapsible=icon]:hidden">Acme 工作台</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>主菜单</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem v-for="n in nav" :key="n.label">
                <SidebarMenuButton :tooltip="n.label" :is-active="n.active">
                  <component :is="n.icon" />
                  <span>{{ n.label }}</span>
                </SidebarMenuButton>
                <SidebarMenuBadge v-if="n.badge">
                  {{ n.badge }}
                </SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup class="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="设置">
                  <Settings />
                  <span>设置</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div class="flex items-center gap-2 px-1 py-1.5">
          <Avatar class="size-8">
            <AvatarFallback>林</AvatarFallback>
          </Avatar>
          <div class="flex min-w-0 flex-col group-data-[collapsible=icon]:hidden">
            <span class="text-sm font-bold">林晓</span>
            <span class="truncate label-xs text-muted-foreground">lin@example.com</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>

    <SidebarInset>
      <header class="flex h-14 items-center gap-3 border-b px-4">
        <SidebarTrigger />
        <span class="font-bold">概览</span>
        <InputGroup class="ml-auto hidden w-64 sm:flex">
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupInput placeholder="搜索…" />
        </InputGroup>
        <Button size="sm">
          新建
        </Button>
      </header>

      <div class="grid gap-6 p-6">
        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <Card v-for="s in stats" :key="s.label">
            <CardHeader>
              <CardDescription>{{ s.label }}</CardDescription>
              <CardTitle class="font-mono text-2xl whitespace-nowrap tabular-nums">
                {{ s.value }}
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  {{ s.delta }}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter class="text-sm text-muted-foreground">
              {{ s.note }}
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>访问量</CardTitle>
            <CardDescription>最近 30 天</CardDescription>
            <CardAction>
              <Tabs default-value="30">
                <TabsList>
                  <TabsTrigger value="90">
                    3 个月
                  </TabsTrigger>
                  <TabsTrigger value="30">
                    30 天
                  </TabsTrigger>
                  <TabsTrigger value="7">
                    7 天
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardAction>
          </CardHeader>
          <CardContent>
            <ChartContainer :config="visitConfig" class="aspect-auto gap-4">
              <VisXYContainer :data="visits" :height="240">
                <VisArea
                  :x="(d: Day) => d.day"
                  :y="[(d: Day) => d.mobile, (d: Day) => d.desktop]"
                  :color="[visitConfig.mobile.color, visitConfig.desktop.color]"
                  :opacity="0.6"
                />
                <VisAxis type="x" :tick-format="(t: number) => `${t} 日`" :num-ticks="6" :grid-line="false" />
                <VisAxis type="y" :num-ticks="4" />
              </VisXYContainer>
              <ChartLegend>
                <ChartLegendContent />
              </ChartLegend>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>文档章节</CardTitle>
            <CardDescription>本周需要完成的部分。</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead class="w-8">
                    <Checkbox aria-label="全选" />
                  </TableHead>
                  <TableHead>标题</TableHead>
                  <TableHead>类型</TableHead>
                  <TableHead>状态</TableHead>
                  <TableHead class="text-right">
                    目标页数
                  </TableHead>
                  <TableHead>负责人</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow v-for="r in rows" :key="r.title">
                  <TableCell><Checkbox :aria-label="`选择 ${r.title}`" /></TableCell>
                  <TableCell class="font-bold">
                    {{ r.title }}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {{ r.type }}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge :variant="r.status === '完成' ? 'default' : 'secondary'">
                      {{ r.status }}
                    </Badge>
                  </TableCell>
                  <TableCell class="text-right font-mono tabular-nums">
                    {{ r.target }}
                  </TableCell>
                  <TableCell>{{ r.owner }}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
