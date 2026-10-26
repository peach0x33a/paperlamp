<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
</script>

<template>
  <div class="w-full max-w-xl rounded-md border bg-card px-6">
    <Accordion type="single" collapsible>
      <AccordionItem value="q1">
        <AccordionTrigger>工具是谁写的？</AccordionTrigger>
        <AccordionContent>一位业余爱好者，写在周末的咖啡店里。</AccordionContent>
      </AccordionItem>
      <AccordionItem value="q2">
        <AccordionTrigger>数据会上传吗？</AccordionTrigger>
        <AccordionContent>不会。你输入的文字和生成的图像都只留在这个页面里。</AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
