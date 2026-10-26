<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const intro = ref("一句话生成一座有居民的小镇。")
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">
        编辑简介
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>编辑简介</DialogTitle>
        <DialogDescription>一两句话说明这个工具是做什么的。保存后会立即显示在工具页。</DialogDescription>
      </DialogHeader>
      <div class="grid gap-2">
        <Label for="intro">简介</Label>
        <Textarea id="intro" v-model="intro" />
      </div>
      <DialogFooter>
        <DialogClose as-child>
          <Button variant="outline">
            取消
          </Button>
        </DialogClose>
        <DialogClose as-child>
          <Button>保存简介</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
