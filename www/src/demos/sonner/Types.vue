<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/sonner"

function promise() {
  toast.promise(new Promise(resolve => setTimeout(resolve, 1500)), {
    loading: "正在生成总结…",
    success: "总结已生成",
    error: "生成失败",
  })
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Button variant="outline" @click="toast.success('评分已提交')">
      成功
    </Button>
    <Button variant="outline" @click="toast.info('该工具正在维护')">
      信息
    </Button>
    <Button variant="outline" @click="toast.warning('内容包含闪烁画面')">
      警告
    </Button>
    <Button variant="outline" @click="toast.error('登录失败，请重试')">
      错误
    </Button>
    <Button variant="outline" @click="promise">
      异步操作
    </Button>
  </div>
</template>
