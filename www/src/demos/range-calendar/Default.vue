<script setup lang="ts">
import { DateFormatter, getLocalTimeZone } from "@internationalized/date"
import type { DateRange } from "reka-ui"
import { computed, shallowRef } from "vue"
import { RangeCalendar } from "@/components/ui/range-calendar"

const range = shallowRef<DateRange>({ start: undefined, end: undefined })
const formatter = new DateFormatter("zh-CN", { dateStyle: "medium" })

const summary = computed(() => {
  const start = range.value?.start
  const end = range.value?.end
  if (!start || !end) return "还没选时间范围，先点开始日期。"
  return `上架时间：${formatter.formatRange(start.toDate(getLocalTimeZone()), end.toDate(getLocalTimeZone()))}`
})
</script>

<template>
  <div class="grid w-full max-w-sm gap-3">
    <RangeCalendar
      v-model="range"
      locale="zh-CN"
      calendar-label="筛选上架时间"
      class="rounded-md border"
    />
    <p class="body-sm text-muted-foreground">
      {{ summary }}
    </p>
  </div>
</template>
