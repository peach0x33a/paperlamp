<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { RatingInput } from "@/components/ui/rating"

const tiers = ["很差", "一般", "还行", "推荐", "必玩"]
const draft = ref<number>()
const saved = ref<number>()
const open = ref(false)

function openDrawer() {
  draft.value = saved.value
}

function submit() {
  saved.value = draft.value
  open.value = false
}
</script>

<template>
  <div class="grid w-full max-w-md gap-4">
    <div class="flex items-center gap-3">
      <Drawer v-model:open="open">
        <DrawerTrigger as-child>
          <Button variant="outline" @click="openDrawer">
            给这个工具评分
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div class="mx-auto w-full max-w-md">
            <DrawerHeader>
              <DrawerTitle>给这个工具评分</DrawerTitle>
              <DrawerDescription>评分可以随时修改。</DrawerDescription>
            </DrawerHeader>
            <div class="px-4 pb-2">
              <RatingInput v-model="draft" :labels="tiers" aria-label="给这个工具评分" />
            </div>
            <DrawerFooter>
              <Button :disabled="draft === undefined" @click="submit">
                提交评分
              </Button>
              <DrawerClose as-child>
                <Button variant="outline">
                  取消
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
      <p v-if="saved !== undefined" class="body-sm text-muted-foreground">
        你的评分是 <span class="label-sm text-foreground">{{ saved }} / 5</span>
      </p>
      <p v-else class="body-sm text-muted-foreground">还没有评分。</p>
    </div>
  </div>
</template>
