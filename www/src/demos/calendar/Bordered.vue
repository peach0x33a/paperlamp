<script setup lang="ts">
import type { DateValue } from "@internationalized/date"
import { isWeekend } from "@internationalized/date"
import { ref } from "vue"
import { Calendar } from "@/components/ui/calendar"

const releaseDate = ref<DateValue>()
const isDateUnavailable = (date: DateValue) => isWeekend(date, "zh-CN")
</script>

<template>
  <div class="w-full max-w-sm">
    <Calendar
      v-model="releaseDate"
      locale="zh-CN"
      calendar-label="上架日期"
      class="rounded-md border"
      :is-date-unavailable="isDateUnavailable"
    />
  </div>
</template>
