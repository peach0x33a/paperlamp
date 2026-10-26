<script setup lang="ts">
import type { DateValue } from "@internationalized/date"
import { DateFormatter, getLocalTimeZone, isWeekend } from "@internationalized/date"
import { CalendarIcon } from "lucide-vue-next"
import { computed, ref } from "vue"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const releaseDate = ref<DateValue>()
const formatter = new DateFormatter("zh-CN", { dateStyle: "long" })
const isDateUnavailable = (date: DateValue) => isWeekend(date, "zh-CN")

const label = computed(() =>
  releaseDate.value ? formatter.format(releaseDate.value.toDate(getLocalTimeZone())) : "选择上架日期",
)
</script>

<template>
  <div class="w-full max-w-sm">
    <Popover>
      <PopoverTrigger as-child>
        <Button variant="outline" class="w-full justify-start font-normal">
          <CalendarIcon class="text-muted-foreground" />
          <span :class="{ 'text-muted-foreground': !releaseDate }">{{ label }}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0" align="start">
        <Calendar
          v-model="releaseDate"
          locale="zh-CN"
          calendar-label="上架日期"
          :is-date-unavailable="isDateUnavailable"
        />
      </PopoverContent>
    </Popover>
  </div>
</template>
