<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const isDesktop = useMediaQuery("(min-width: 768px)")
const open = ref(false)
const name = ref("猫名字典")
const intro = ref("一句话生成一组有性格的猫名。")
</script>

<template>
  <div class="grid w-full max-w-md gap-4">
    <Dialog v-if="isDesktop" v-model:open="open">
      <DialogTrigger as-child>
        <Button variant="outline">
          编辑资料
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>编辑资料</DialogTitle>
          <DialogDescription>名称和简介会显示在工具页与卡片上。</DialogDescription>
        </DialogHeader>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="profile-name-desktop">名称</Label>
            <Input id="profile-name-desktop" v-model="name" />
          </div>
          <div class="grid gap-2">
            <Label for="profile-intro-desktop">简介</Label>
            <Textarea id="profile-intro-desktop" v-model="intro" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose as-child>
            <Button variant="outline">
              取消
            </Button>
          </DialogClose>
          <DialogClose as-child>
            <Button>保存资料</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <Drawer v-else v-model:open="open">
      <DrawerTrigger as-child>
        <Button variant="outline">
          编辑资料
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>编辑资料</DrawerTitle>
          <DrawerDescription>名称和简介会显示在工具页与卡片上。</DrawerDescription>
        </DrawerHeader>
        <div class="grid gap-4 px-4 pb-2">
          <div class="grid gap-2">
            <Label for="profile-name-mobile">名称</Label>
            <Input id="profile-name-mobile" v-model="name" />
          </div>
          <div class="grid gap-2">
            <Label for="profile-intro-mobile">简介</Label>
            <Textarea id="profile-intro-mobile" v-model="intro" />
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose as-child>
            <Button>保存资料</Button>
          </DrawerClose>
          <DrawerClose as-child>
            <Button variant="outline">
              取消
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </div>
</template>
