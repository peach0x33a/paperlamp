<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"

const nickname = ref("小镇居民")
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline">
        修改昵称
      </Button>
    </PopoverTrigger>
    <PopoverContent class="grid w-72 gap-3">
      <div class="grid gap-2">
        <Label for="nickname">昵称</Label>
        <Input id="nickname" v-model="nickname" />
      </div>
      <div class="flex justify-end gap-2">
        <PopoverClose as-child>
          <Button variant="outline" size="sm">
            取消
          </Button>
        </PopoverClose>
        <PopoverClose as-child>
          <Button size="sm">
            保存昵称
          </Button>
        </PopoverClose>
      </div>
    </PopoverContent>
  </Popover>
</template>
