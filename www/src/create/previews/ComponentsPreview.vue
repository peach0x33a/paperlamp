<script setup lang="ts">
import { Bold, CircleAlert, FolderOpen, Info, Italic, Plus, Search, Underline } from "lucide-vue-next"
import { ref } from "vue"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

// One card per component family, so every token the preset touches shows up somewhere.
const volume = ref([60])
const density = ref("comfortable")
const marks = ref<string[]>(["bold"])
</script>

<template>
  <div class="columns-1 gap-6 p-6 md:columns-2 xl:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
    <Card>
      <CardHeader>
        <CardTitle>按钮</CardTitle>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="flex flex-wrap gap-2">
          <Button>主要</Button>
          <Button variant="secondary">
            次要
          </Button>
          <Button variant="outline">
            描边
          </Button>
          <Button variant="ghost">
            幽灵
          </Button>
          <Button variant="link">
            链接
          </Button>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <Button size="sm">
            <Plus /> 小号
          </Button>
          <Button size="lg">
            大号
          </Button>
          <Button size="icon" variant="outline" aria-label="搜索">
            <Search />
          </Button>
          <Button disabled>
            <Spinner /> 处理中
          </Button>
        </div>
        <ButtonGroup>
          <Button variant="outline">
            上一页
          </Button>
          <Button variant="outline">
            1 / 12
          </Button>
          <Button variant="outline">
            下一页
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>输入</CardTitle>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid gap-2">
          <Label for="cp-name">名称</Label>
          <Input id="cp-name" placeholder="项目名称" />
        </div>
        <InputGroup>
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupInput placeholder="搜索文档…" />
          <InputGroupAddon align="inline-end">
            <KbdGroup><Kbd>Ctrl</Kbd><Kbd>K</Kbd></KbdGroup>
          </InputGroupAddon>
        </InputGroup>
        <Select default-value="shanghai">
          <SelectTrigger class="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beijing">
              北京
            </SelectItem>
            <SelectItem value="shanghai">
              上海
            </SelectItem>
            <SelectItem value="shenzhen">
              深圳
            </SelectItem>
          </SelectContent>
        </Select>
        <Textarea placeholder="备注" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>选择</CardTitle>
      </CardHeader>
      <CardContent class="grid gap-5">
        <label class="flex items-center gap-2 text-sm">
          <Checkbox :default-value="true" /> 记住我
        </label>
        <RadioGroup v-model="density" class="flex gap-4">
          <label class="flex items-center gap-2 text-sm"><RadioGroupItem value="compact" /> 紧凑</label>
          <label class="flex items-center gap-2 text-sm"><RadioGroupItem value="comfortable" /> 舒适</label>
        </RadioGroup>
        <label class="flex items-center justify-between text-sm">
          自动保存 <Switch :default-value="true" />
        </label>
        <div class="grid gap-2">
          <div class="flex justify-between text-sm">
            <span>音量</span><span class="font-mono text-muted-foreground tabular-nums">{{ volume[0] }}</span>
          </div>
          <Slider v-model="volume" :max="100" />
        </div>
        <ToggleGroup v-model="marks" type="multiple" variant="outline">
          <ToggleGroupItem value="bold" aria-label="粗体">
            <Bold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="斜体">
            <Italic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="下划线">
            <Underline />
          </ToggleGroupItem>
        </ToggleGroup>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>徽章与头像</CardTitle>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="flex flex-wrap gap-2">
          <Badge>默认</Badge>
          <Badge variant="secondary">
            次要
          </Badge>
          <Badge variant="outline">
            描边
          </Badge>
          <Badge variant="indigo">
            提示
          </Badge>
          <Badge variant="warning">
            警告
          </Badge>
        </div>
        <div class="flex -space-x-2">
          <Avatar v-for="n in ['林', '陈', '周', '王']" :key="n" class="ring-2 ring-card">
            <AvatarFallback>{{ n }}</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
    </Card>

    <Tabs default-value="account">
      <TabsList class="w-full">
        <TabsTrigger value="account">
          账号
        </TabsTrigger>
        <TabsTrigger value="password">
          密码
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardContent class="grid gap-2">
            <Label for="cp-user">用户名</Label>
            <Input id="cp-user" model-value="linxiao" />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardContent class="grid gap-2">
            <Label for="cp-pw">新密码</Label>
            <Input id="cp-pw" type="password" />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>

    <Alert>
      <Info />
      <AlertTitle>有新版本可用</AlertTitle>
      <AlertDescription>刷新页面即可更新，未保存的内容不会丢失。</AlertDescription>
    </Alert>

    <Alert variant="destructive">
      <CircleAlert />
      <AlertTitle>保存失败</AlertTitle>
      <AlertDescription>网络连接中断，请稍后再试。</AlertDescription>
    </Alert>

    <Card>
      <CardHeader>
        <CardTitle>加载</CardTitle>
      </CardHeader>
      <CardContent class="grid gap-4">
        <Progress :model-value="58" aria-label="进度" />
        <div class="flex items-center gap-3">
          <Skeleton class="size-10 rounded-full" />
          <div class="grid flex-1 gap-2">
            <Skeleton class="h-4 w-3/4" />
            <Skeleton class="h-3 w-1/2" />
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardContent>
        <Accordion type="single" collapsible default-value="a">
          <AccordionItem value="a">
            <AccordionTrigger>可以随时取消订阅吗？</AccordionTrigger>
            <AccordionContent>可以，取消后当前计费周期结束前仍可使用。</AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionTrigger>支持开发票吗？</AccordionTrigger>
            <AccordionContent>支持，在账单页面申请即可。</AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>

    <Empty class="border">
      <EmptyHeader>
        <EmptyMedia>
          <FolderOpen />
        </EmptyMedia>
        <EmptyTitle>还没有项目</EmptyTitle>
        <EmptyDescription>创建第一个项目后，它会出现在这里。</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <Plus /> 新建项目
        </Button>
      </EmptyContent>
    </Empty>
  </div>
</template>
