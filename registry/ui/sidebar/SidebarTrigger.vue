<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { PanelLeft } from "lucide-vue-next"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSidebar } from "./utils"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    data-slot="sidebar-trigger"
    variant="ghost"
    size="icon-sm"
    :class="cn('size-7', props.class)"
    @click="toggleSidebar"
  >
    <PanelLeft />
    <span class="sr-only">切换侧边栏</span>
  </Button>
</template>
