<script setup lang="ts">
import { CircleAlert, Ghost, Sparkles, TriangleAlert, Wrench } from "lucide-vue-next"
import { ref } from "vue"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Input } from "@/components/ui/input"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RatingInput, RatingStars } from "@/components/ui/rating"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { TagChip } from "@/components/ui/tag-chip"
import { Textarea } from "@/components/ui/textarea"
import { WarningBanner, WarningBannerDescription, WarningBannerTitle } from "@/components/ui/warning-banner"

const score = ref<number>(4)
const comment = ref("")
</script>

<template>
  <div class="columns-1 gap-6 p-6 md:columns-2 xl:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
    <Card>
      <CardHeader>
        <CardTitle>登录</CardTitle>
        <CardDescription>登录后可以评分和评论。</CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid gap-2">
          <Label for="pv-email">邮箱</Label>
          <Input id="pv-email" type="email" placeholder="you@example.com" />
        </div>
        <div class="grid gap-2">
          <Label for="pv-pass">密码</Label>
          <Input id="pv-pass" type="password" />
        </div>
      </CardContent>
      <CardFooter class="flex-col items-stretch gap-3">
        <Button class="w-full">
          登录
        </Button>
        <Button variant="bracket" class="self-center">
          注册
        </Button>
      </CardFooter>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>给「猫名字典」评分</CardTitle>
      </CardHeader>
      <CardContent class="grid gap-4">
        <RatingInput v-model="score" :labels="['拉', 'NPC', '人上人', '顶级', '夯']" aria-label="评分" />
        <RatingStars :value="4.5" />
      </CardContent>
    </Card>

    <Alert variant="indigo">
      <Sparkles />
      <AlertTitle>由 AI 生成</AlertTitle>
      <AlertDescription>这段介绍是模型读完源码后写的，可能有一本正经的胡说八道。</AlertDescription>
    </Alert>

    <Card>
      <CardHeader>
        <CardTitle>发表评论</CardTitle>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="flex items-start gap-3">
          <Avatar>
            <AvatarFallback>墨</AvatarFallback>
          </Avatar>
          <div class="grid gap-1">
            <div class="flex items-baseline gap-2">
              <span class="font-bold">墨鱼</span>
              <span class="label-sm text-muted-foreground">2026-10-24</span>
            </div>
            <p class="body-sm">
              让它给我起了二十个猫的名字，其中三个真的用上了。
            </p>
          </div>
        </div>
        <Textarea v-model="comment" placeholder="说两句吧" />
      </CardContent>
      <CardFooter class="justify-end gap-2">
        <Button variant="outline">
          取消
        </Button>
        <Button :disabled="!comment.trim()">
          发表评论
        </Button>
      </CardFooter>
    </Card>

    <Card>
      <CardContent class="flex flex-wrap gap-2">
        <Badge>新上架</Badge>
        <Badge variant="secondary">
          v0.3.1
        </Badge>
        <Badge variant="outline">
          开源
        </Badge>
        <Badge variant="status">
          <Wrench /> 维护中
        </Badge>
        <Badge variant="featured">
          <Sparkles /> 精选
        </Badge>
        <Badge variant="warning">
          <TriangleAlert /> 闪烁画面
        </Badge>
      </CardContent>
      <CardContent class="flex flex-wrap gap-2">
        <TagChip :default-value="true">
          #小游戏
        </TagChip>
        <TagChip>#文字处理</TagChip>
        <TagChip>#可视化</TagChip>
      </CardContent>
    </Card>

    <WarningBanner dismissible>
      <WarningBannerTitle>突然的响声</WarningBannerTitle>
      <WarningBannerDescription>第三关结尾有一声很响的锣。</WarningBannerDescription>
    </WarningBanner>

    <Card>
      <CardHeader>
        <CardTitle>生成总结</CardTitle>
        <CardDescription class="flex items-center gap-2">
          <Spinner /> AI 正在读评论…
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <Progress :model-value="58" aria-label="生成进度" />
        <div class="flex items-center gap-3">
          <Skeleton class="size-10" />
          <div class="grid flex-1 gap-2">
            <Skeleton class="h-4 w-3/4" />
            <Skeleton class="h-3 w-1/2" />
          </div>
        </div>
      </CardContent>
    </Card>

    <Alert variant="destructive">
      <CircleAlert />
      <AlertTitle>评论没发出去</AlertTitle>
      <AlertDescription>登录状态过期了，重新登录后草稿还在。</AlertDescription>
    </Alert>

    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <Ghost />
        </EmptyMedia>
        <EmptyTitle>还没有人评论</EmptyTitle>
        <EmptyDescription>玩过之后说两句吧，好坏都行。</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">
          写第一条评论
        </Button>
      </EmptyContent>
    </Empty>

    <Card>
      <CardContent class="grid gap-3 body-sm text-muted-foreground">
        <p>
          按 <KbdGroup><Kbd>Ctrl</Kbd><span>+</span><Kbd>K</Kbd></KbdGroup> 搜索工具。
        </p>
        <p>按 <Kbd>F</Kbd> 进入专注模式，<Kbd>Esc</Kbd> 退出。</p>
      </CardContent>
    </Card>
  </div>
</template>
