<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import { WarningBanner, WarningBannerDescription, WarningBannerTitle } from "@/components/ui/warning-banner"

const open = ref(true)
</script>

<template>
  <div class="grid w-full max-w-xl gap-3">
    <WarningBanner v-model:open="open" dismissible>
      <WarningBannerTitle>突然的响声</WarningBannerTitle>
      <WarningBannerDescription>第三关结尾有一声很响的锣。</WarningBannerDescription>
    </WarningBanner>
    <Button v-if="!open" variant="bracket" class="justify-self-start" @click="open = true">
      重新显示提醒
    </Button>
  </div>
</template>
