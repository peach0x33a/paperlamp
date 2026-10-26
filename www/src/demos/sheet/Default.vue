<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

const tags = ["小游戏", "效率工具", "文字"]
const picked = ref<string[]>(["小游戏"])
const minStars = ref([3])
const hideMaintenance = ref(true)

function toggleTag(tag: string, checked: boolean | "indeterminate") {
  picked.value = checked === true
    ? [...picked.value, tag]
    : picked.value.filter(item => item !== tag)
}

function reset() {
  picked.value = []
  minStars.value = [1]
  hideMaintenance.value = false
}
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline">
        筛选工具
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>筛选工具</SheetTitle>
        <SheetDescription>选好条件后点应用，列表会立即更新。</SheetDescription>
      </SheetHeader>
      <div class="grid gap-6">
        <div class="grid gap-3">
          <span class="label-sm text-muted-foreground">标签</span>
          <div v-for="tag in tags" :key="tag" class="flex items-center gap-2">
            <Checkbox
              :id="`filter-${tag}`"
              :model-value="picked.includes(tag)"
              @update:model-value="(value) => toggleTag(tag, value)"
            />
            <Label :for="`filter-${tag}`">{{ tag }}</Label>
          </div>
        </div>
        <div class="grid gap-3">
          <div class="flex items-baseline justify-between">
            <span class="label-sm text-muted-foreground">最低评分</span>
            <span class="label-sm text-muted-foreground">至少 {{ minStars[0] }} 星</span>
          </div>
          <Slider v-model="minStars" :min="1" :max="5" :step="1" aria-label="最低评分" />
        </div>
        <div class="flex items-center justify-between gap-6">
          <Label for="filter-maintenance">隐藏维护中的工具</Label>
          <Switch id="filter-maintenance" v-model="hideMaintenance" />
        </div>
      </div>
      <SheetFooter>
        <Button variant="outline" @click="reset">
          重置
        </Button>
        <SheetClose as-child>
          <Button>应用筛选</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
