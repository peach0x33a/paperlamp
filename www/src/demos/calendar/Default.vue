<script setup lang="ts">
import type { DateValue } from "@internationalized/date"
import { DateFormatter, getLocalTimeZone, isWeekend } from "@internationalized/date"
import { computed, ref } from "vue"
import { Calendar } from "@/components/ui/calendar"

const releaseDate = ref<DateValue>()
const formatter = new DateFormatter("zh-CN", { dateStyle: "long" })
const isDateUnavailable = (date: DateValue) => isWeekend(date, "zh-CN")

const summary = computed(() => {
  if (!releaseDate.value) return "未选择日期。"
  return `上架日期：${formatter.format(releaseDate.value.toDate(getLocalTimeZone()))}`
})
</script>

<template>
  <div class="grid w-fit gap-3">
    <Calendar
      v-model="releaseDate"
      locale="zh-CN"
      calendar-label="上架日期"
      :is-date-unavailable="isDateUnavailable"
    />
    <p class="body-sm text-muted-foreground">
      {{ summary }}
    </p>
  </div>
</template>
