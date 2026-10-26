<script setup lang="ts">
import { ref } from "vue"
import { Label } from "@/components/ui/label"
import {
  PinInput,
  PinInputGroup,
  PinInputInput,
  PinInputSeparator,
} from "@/components/ui/pin-input"

const code = ref<string[]>([])
</script>

<template>
  <div class="grid gap-2">
    <Label id="pin-invite-label">邀请码</Label>
    <PinInput v-model="code" otp placeholder="·" aria-labelledby="pin-invite-label">
      <PinInputGroup>
        <PinInputInput v-for="i in 3" :key="i" :index="i - 1" />
        <PinInputSeparator />
        <PinInputInput v-for="i in 3" :key="i + 3" :index="i + 2" />
      </PinInputGroup>
    </PinInput>
  </div>
</template>
