<script setup lang="ts">
import { DateFormatter, getLocalTimeZone } from "@internationalized/date"
import { CalendarIcon } from "lucide-vue-next"
import type { DateRange } from "reka-ui"
import { computed, shallowRef } from "vue"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RangeCalendar } from "@/components/ui/range-calendar"

const range = shallowRef<DateRange>({ start: undefined, end: undefined })
const formatter = new DateFormatter("zh-CN", { dateStyle: "medium" })

const label = computed(() => {
  const { start, end } = range.value
  if (!start || !end) return "选择时间范围"
  return formatter.formatRange(start.toDate(getLocalTimeZone()), end.toDate(getLocalTimeZone()))
})
</script>

<template>
  <div class="w-full max-w-sm">
    <Popover>
      <PopoverTrigger as-child>
        <Button variant="outline" class="w-full justify-start font-normal">
          <CalendarIcon class="text-muted-foreground" />
          <span :class="{ 'text-muted-foreground': !range.start || !range.end }">{{ label }}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0" align="start">
        <RangeCalendar
          v-model="range"
          locale="zh-CN"
          calendar-label="选择时间范围"
        />
      </PopoverContent>
    </Popover>
  </div>
</template>
