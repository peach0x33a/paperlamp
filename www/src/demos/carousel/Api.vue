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
import PositionCounter from "./PositionCounter.vue"

const tools = [
  { name: "猫名字典", desc: "输入一种性格，生成一组猫名。" },
  { name: "小镇生成器", desc: "一句话生成一座有居民的小镇。" },
  { name: "便签墙", desc: "把灵感贴在纸面上。" },
  { name: "节拍器", desc: "纯文字界面的节拍器。" },
  { name: "配色卡", desc: "从一个颜色推出一组纸色。" },
]
</script>

<template>
  <div class="w-full max-w-md px-12">
    <Carousel>
      <CarouselContent>
        <CarouselItem v-for="tool in tools" :key="tool.name">
          <Card>
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
      <div class="mt-4">
        <PositionCounter />
      </div>
    </Carousel>
  </div>
</template>
