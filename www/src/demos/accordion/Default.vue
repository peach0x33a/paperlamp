<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
</script>

<template>
  <Accordion type="single" collapsible class="w-full max-w-xl">
    <AccordionItem value="who">
      <AccordionTrigger>工具是谁写的？</AccordionTrigger>
      <AccordionContent>
        一位业余爱好者在周末写的。大部分小游戏都是单文件，源码可以直接在页面里查看。
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="upload">
      <AccordionTrigger>数据会上传吗？</AccordionTrigger>
      <AccordionContent>
        不会。所有计算都在你的浏览器里完成，生成的像素小镇也只保存在本地。
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="crash">
      <AccordionTrigger>玩到一半卡住了怎么办？</AccordionTrigger>
      <AccordionContent>
        刷新页面就能回到开始。如果反复卡在同一处，请在评论区告诉我们当时的操作。
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
