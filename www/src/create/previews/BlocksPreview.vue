<script setup lang="ts">
import { getLocalTimeZone, today } from "@internationalized/date"
import { VisArea, VisAxis, VisLine, VisXYContainer } from "@unovis/vue"
import { Check, Copy, Github, Paperclip, Send, Upload } from "lucide-vue-next"
import { ref, shallowRef } from "vue"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { ChartConfig } from "@/components/ui/chart"
import { ChartContainer } from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"

// Neutral sample content; nothing here refers to a real product.
const revenue = [12, 18, 15, 22, 19, 27, 24, 31, 29, 36, 33, 41].map((v, i) => ({ month: i + 1, value: v }))
const revenueConfig = { value: { label: "收入", color: "var(--primary)" } } satisfies ChartConfig

const members = [
  { name: "林晓", email: "lin@example.com", role: "owner" },
  { name: "陈默", email: "chen@example.com", role: "editor" },
  { name: "周宁", email: "zhou@example.com", role: "viewer" },
]
const payments = [
  { id: "#3207", who: "王一", amount: "¥ 316.00", status: "已支付" },
  { id: "#3206", who: "赵青", amount: "¥ 242.00", status: "处理中" },
  { id: "#3205", who: "孙远", amount: "¥ 837.00", status: "已支付" },
  { id: "#3204", who: "李木", amount: "¥ 874.00", status: "已退款" },
]
const notify = ref({ email: true, push: false, digest: true, mentions: true })
const plan = ref("pro")
const date = shallowRef(today(getLocalTimeZone()))
const copied = ref(false)
const messages = [
  { me: false, text: "周五的评审改到下午三点可以吗？" },
  { me: true, text: "可以，我把会议室也改一下。" },
  { me: false, text: "好，资料我晚上发群里。" },
]
</script>

<template>
  <div class="columns-1 gap-6 p-6 md:columns-2 xl:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
    <Card>
      <CardHeader>
        <CardTitle>创建账号</CardTitle>
        <CardDescription>填写邮箱即可开始使用。</CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid grid-cols-2 gap-3">
          <Button variant="outline">
            <Github /> GitHub
          </Button>
          <Button variant="outline">
            邮箱链接
          </Button>
        </div>
        <div class="flex items-center gap-3 label-sm text-muted-foreground">
          <Separator class="flex-1" /> 或者 <Separator class="flex-1" />
        </div>
        <div class="grid gap-2">
          <Label for="bk-email">邮箱</Label>
          <Input id="bk-email" type="email" placeholder="name@example.com" />
        </div>
        <div class="grid gap-2">
          <Label for="bk-pass">密码</Label>
          <Input id="bk-pass" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button class="w-full">
          创建账号
        </Button>
      </CardFooter>
    </Card>

    <Card>
      <CardHeader>
        <CardDescription>总收入</CardDescription>
        <CardTitle class="font-mono text-3xl tabular-nums">
          ¥ 45,231.89
        </CardTitle>
        <CardAction>
          <Badge variant="secondary">
            +20.1%
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer :config="revenueConfig" class="aspect-auto h-32">
          <VisXYContainer :data="revenue" :height="128" :margin="{ top: 4, bottom: 4 }">
            <VisArea :x="(d: { month: number }) => d.month" :y="(d: { value: number }) => d.value" color="var(--primary)" :opacity="0.12" />
            <VisLine :x="(d: { month: number }) => d.month" :y="(d: { value: number }) => d.value" color="var(--primary)" :line-width="2" />
            <VisAxis type="x" :tick-format="(t: number) => `${t}月`" :num-ticks="6" :grid-line="false" />
          </VisXYContainer>
        </ChartContainer>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>团队成员</CardTitle>
        <CardDescription>邀请同事一起协作。</CardDescription>
      </CardHeader>
      <CardContent class="grid gap-5">
        <div v-for="m in members" :key="m.email" class="flex items-center gap-3">
          <Avatar class="size-9">
            <AvatarFallback>{{ m.name.slice(0, 1) }}</AvatarFallback>
          </Avatar>
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold">
              {{ m.name }}
            </p>
            <p class="truncate label-sm text-muted-foreground">
              {{ m.email }}
            </p>
          </div>
          <Select :default-value="m.role">
            <SelectTrigger class="w-24" size="sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="owner">
                所有者
              </SelectItem>
              <SelectItem value="editor">
                编辑
              </SelectItem>
              <SelectItem value="viewer">
                只读
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>付款记录</CardTitle>
        <CardDescription>最近四笔订单。</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>订单</TableHead>
              <TableHead>客户</TableHead>
              <TableHead>状态</TableHead>
              <TableHead class="text-right">
                金额
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="p in payments" :key="p.id">
              <TableCell class="font-mono">
                {{ p.id }}
              </TableCell>
              <TableCell>{{ p.who }}</TableCell>
              <TableCell>
                <Badge :variant="p.status === '已支付' ? 'default' : p.status === '处理中' ? 'secondary' : 'outline'">
                  {{ p.status }}
                </Badge>
              </TableCell>
              <TableCell class="text-right font-mono tabular-nums">
                {{ p.amount }}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>通知</CardTitle>
        <CardDescription>选择你想收到的提醒。</CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <label class="flex items-center justify-between gap-4">
          <span class="grid gap-0.5"><span class="text-sm font-bold">邮件通知</span><span class="text-sm text-muted-foreground">账号与安全相关的邮件。</span></span>
          <Switch v-model="notify.email" />
        </label>
        <label class="flex items-center justify-between gap-4">
          <span class="grid gap-0.5"><span class="text-sm font-bold">推送通知</span><span class="text-sm text-muted-foreground">在设备上接收即时提醒。</span></span>
          <Switch v-model="notify.push" />
        </label>
        <label class="flex items-center justify-between gap-4">
          <span class="grid gap-0.5"><span class="text-sm font-bold">每周摘要</span><span class="text-sm text-muted-foreground">每周一早上汇总一次。</span></span>
          <Switch v-model="notify.digest" />
        </label>
        <Separator />
        <label class="flex items-center gap-2 text-sm">
          <Checkbox v-model="notify.mentions" /> 只在被提及时提醒我
        </label>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>选择套餐</CardTitle>
        <CardDescription>随时可以升级或降级。</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup v-model="plan" class="grid gap-3">
          <Label
            v-for="p in [{ v: 'free', t: '免费', d: '个人使用，3 个项目' }, { v: 'pro', t: '专业版', d: '无限项目，优先支持' }, { v: 'team', t: '团队版', d: '成员管理与审计日志' }]"
            :key="p.v"
            class="flex cursor-pointer items-start gap-3 rounded-md border p-4 font-normal has-data-[state=checked]:border-primary"
          >
            <RadioGroupItem :value="p.v" class="mt-0.5" />
            <span class="grid gap-1">
              <span class="font-bold">{{ p.t }}</span>
              <span class="text-sm text-muted-foreground">{{ p.d }}</span>
            </span>
          </Label>
        </RadioGroup>
      </CardContent>
    </Card>

    <Card>
      <CardContent class="flex justify-center">
        <Calendar v-model="date" locale="zh-CN" class="p-0" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>报告问题</CardTitle>
        <CardDescription>描述你遇到的情况，我们会尽快回复。</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <div class="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel>模块</FieldLabel>
              <Select default-value="billing">
                <SelectTrigger class="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="billing">
                    账单
                  </SelectItem>
                  <SelectItem value="account">
                    账号
                  </SelectItem>
                  <SelectItem value="api">
                    API
                  </SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel>紧急程度</FieldLabel>
              <Select default-value="normal">
                <SelectTrigger class="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">
                    低
                  </SelectItem>
                  <SelectItem value="normal">
                    一般
                  </SelectItem>
                  <SelectItem value="high">
                    高
                  </SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div>
          <Field>
            <FieldLabel for="bk-subject">标题</FieldLabel>
            <Input id="bk-subject" placeholder="一句话说明问题" />
          </Field>
          <Field>
            <FieldLabel for="bk-detail">详细描述</FieldLabel>
            <Textarea id="bk-detail" placeholder="复现步骤、期望结果与实际结果" />
            <FieldDescription>请不要在这里填写密码等敏感信息。</FieldDescription>
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter class="justify-between">
        <Button variant="ghost">
          取消
        </Button>
        <Button>提交</Button>
      </CardFooter>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>分享文档</CardTitle>
        <CardDescription>拿到链接的人都可以查看。</CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <InputGroup>
          <InputGroupInput model-value="https://example.com/doc/8f2a" readonly />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="icon-sm" aria-label="复制链接" @click="copied = true">
              <Check v-if="copied" /><Copy v-else />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <Separator />
        <p class="text-sm font-bold">
          有权限的人
        </p>
        <div v-for="m in members.slice(0, 2)" :key="m.email" class="flex items-center gap-3">
          <Avatar class="size-8">
            <AvatarFallback>{{ m.name.slice(0, 1) }}</AvatarFallback>
          </Avatar>
          <span class="flex-1 text-sm">{{ m.name }}</span>
          <span class="label-sm text-muted-foreground">{{ m.role === "owner" ? "可编辑" : "可查看" }}</span>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>上传文件</CardTitle>
        <CardDescription>支持 PDF、PNG，单个不超过 20 MB。</CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid place-items-center gap-2 rounded-md border border-dashed py-8 text-center">
          <Upload class="size-5 text-muted-foreground" />
          <p class="text-sm">
            拖到这里，或 <span class="font-bold underline underline-offset-4">选择文件</span>
          </p>
        </div>
        <div class="grid gap-2">
          <div class="flex justify-between text-sm">
            <span>季度报告.pdf</span><span class="font-mono text-muted-foreground tabular-nums">68%</span>
          </div>
          <Progress :model-value="68" />
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <div class="flex items-center gap-3">
          <Avatar class="size-9">
            <AvatarFallback>林</AvatarFallback>
          </Avatar>
          <div class="grid gap-0.5">
            <CardTitle class="text-base">
              林晓
            </CardTitle>
            <CardDescription>在线</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent class="grid gap-3">
        <p
          v-for="(m, i) in messages"
          :key="i"
          class="max-w-[80%] rounded-md px-3 py-2 text-sm"
          :class="m.me ? 'ml-auto bg-primary text-primary-foreground' : 'bg-secondary'"
        >
          {{ m.text }}
        </p>
      </CardContent>
      <CardFooter>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupButton size="icon-sm" aria-label="附件">
              <Paperclip />
            </InputGroupButton>
          </InputGroupAddon>
          <InputGroupInput placeholder="输入消息…" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="icon-sm" variant="default" aria-label="发送">
              <Send />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </CardFooter>
    </Card>
  </div>
</template>
