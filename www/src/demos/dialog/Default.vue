<script setup lang="ts">
import { ref } from "vue"
import { Copy } from "lucide-vue-next"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const link = ref("https://example.com/tools/pixel-town")
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">
        分享
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>分享这个工具</DialogTitle>
        <DialogDescription>复制链接发给朋友。对方打开后看到的是同一个版本。</DialogDescription>
      </DialogHeader>
      <div class="grid gap-2">
        <Label for="share-link">链接</Label>
        <div class="flex gap-2">
          <Input id="share-link" v-model="link" readonly class="font-mono label-sm" />
          <Button variant="outline" size="icon" aria-label="复制链接">
            <Copy />
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
