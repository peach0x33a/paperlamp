<script setup lang="ts">
import { ref } from "vue"
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper"

const steps = [
  { step: 1, title: "填写信息", description: "名称、链接与简介" },
  { step: 2, title: "上传截图", description: "至少一张" },
  { step: 3, title: "等待审核", description: "审核通过后公开展示" },
]

const current = ref(2)
</script>

<template>
  <div class="w-full max-w-sm">
    <Stepper v-model="current" orientation="vertical" class="w-full">
      <StepperItem v-for="item in steps" :key="item.step" :step="item.step">
        <StepperTrigger>
          <StepperIndicator />
          <div class="grid text-left">
            <StepperTitle>{{ item.title }}</StepperTitle>
            <StepperDescription>{{ item.description }}</StepperDescription>
          </div>
        </StepperTrigger>
        <StepperSeparator v-if="item.step < steps.length" orientation="vertical" />
      </StepperItem>
    </Stepper>
  </div>
</template>
