<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const updates = [
  { name: "v0.3 · 评分改版", desc: "评分改为五颗星加档位名称。" },
  { name: "v0.2 · 深色模式", desc: "纸色与墨色两套配色，跟随系统。" },
  { name: "v0.1 · 首次发布", desc: "猫名字典与小镇生成器上线。" },
]
</script>

<template>
  <div class="w-full max-w-sm py-12">
    <Carousel orientation="vertical">
      <CarouselContent class="h-64">
        <CarouselItem v-for="item in updates" :key="item.name" class="basis-auto">
          <Card>
            <CardHeader>
              <CardTitle>{{ item.name }}</CardTitle>
              <CardDescription>{{ item.desc }}</CardDescription>
            </CardHeader>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>
