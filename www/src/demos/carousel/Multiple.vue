<script setup lang="ts">
import {
  Card,
  CardContent,
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

const tools = [
  { name: "猫名字典", desc: "生成有个性的猫名。" },
  { name: "小镇生成器", desc: "一句话生成一座小镇。" },
  { name: "便签墙", desc: "拖动排列的灵感墙。" },
  { name: "节拍器", desc: "纯文字的节拍器。" },
  { name: "配色卡", desc: "从一个颜色推出一组纸色。" },
  { name: "冷笑话", desc: "每次打开换一个。" },
]
</script>

<template>
  <div class="w-full max-w-xl px-12">
    <Carousel :opts="{ align: 'start' }">
      <CarouselContent>
        <CarouselItem v-for="tool in tools" :key="tool.name" class="basis-1/3">
          <Card class="h-full">
            <CardHeader>
              <CardTitle>{{ tool.name }}</CardTitle>
              <CardDescription>{{ tool.desc }}</CardDescription>
            </CardHeader>
            <CardContent class="min-h-24" />
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>
