<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/ui/button"
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
  { step: 1, title: "填写信息", description: "名称与链接" },
  { step: 2, title: "上传截图", description: "至少一张，建议横图" },
  { step: 3, title: "等待审核", description: "通常一两天内回复" },
]

const current = ref(1)

function next() {
  if (current.value < steps.length) current.value += 1
}

function prev() {
  if (current.value > 1) current.value -= 1
}
</script>

<template>
  <div class="grid w-full max-w-lg gap-8">
    <Stepper v-model="current" class="w-full">
      <StepperItem v-for="item in steps" :key="item.step" :step="item.step">
        <StepperTrigger>
          <StepperIndicator />
          <div class="grid justify-items-center text-center">
            <StepperTitle>{{ item.title }}</StepperTitle>
            <StepperDescription>{{ item.description }}</StepperDescription>
          </div>
        </StepperTrigger>
        <StepperSeparator v-if="item.step < steps.length" />
      </StepperItem>
    </Stepper>

    <div class="flex justify-between">
      <Button variant="outline" :disabled="current === 1" @click="prev">
        上一步
      </Button>
      <Button :disabled="current === steps.length" @click="next">
        下一步
      </Button>
    </div>
  </div>
</template>
