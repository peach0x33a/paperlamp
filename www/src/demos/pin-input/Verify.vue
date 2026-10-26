<script setup lang="ts">
import { computed, ref } from "vue"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  PinInput,
  PinInputGroup,
  PinInputInput,
} from "@/components/ui/pin-input"

const code = ref<string[]>([])
const complete = computed(() => code.value.filter(Boolean).length === 4)
</script>

<template>
  <div class="grid gap-3">
    <div class="grid gap-2">
      <Label id="pin-verify-label">验证码</Label>
      <PinInput v-model="code" otp placeholder="·" aria-labelledby="pin-verify-label">
        <PinInputGroup>
          <PinInputInput v-for="i in 4" :key="i" :index="i - 1" />
        </PinInputGroup>
      </PinInput>
      <p class="label-sm text-muted-foreground">
        验证码 5 分钟内有效
      </p>
    </div>
    <Button :disabled="!complete">
      提交验证码
    </Button>
  </div>
</template>
