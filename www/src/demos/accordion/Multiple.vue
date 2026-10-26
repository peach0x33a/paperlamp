<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
</script>

<template>
  <Accordion type="multiple" class="w-full max-w-xl">
    <AccordionItem value="a">
      <AccordionTrigger>猫名字典能处理什么图片？</AccordionTrigger>
      <AccordionContent>普通的猫照片就行，JPG 和 PNG 都可以，大小不超过 5MB。</AccordionContent>
    </AccordionItem>
    <AccordionItem value="b">
      <AccordionTrigger>名字能重复吗？</AccordionTrigger>
      <AccordionContent>可能会。每次生成都是新的，重复了就再点一次。</AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
