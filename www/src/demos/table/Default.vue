<script setup lang="ts">
import { RatingStars } from "@/components/ui/rating"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const medals = ["🥇", "🥈", "🥉"]
const tools = [
  { name: "像素小镇生成器", rating: 4.6, updated: "2026-10-18", maintenance: false },
  { name: "古诗接龙", rating: 4.2, updated: "2026-09-21", maintenance: false },
  { name: "会议废话检测", rating: 3.8, updated: "2026-09-30", maintenance: false },
  { name: "猫名字典", rating: 3.1, updated: "2026-10-12", maintenance: true },
]
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="w-16">
          排名
        </TableHead>
        <TableHead>工具</TableHead>
        <TableHead>评分</TableHead>
        <TableHead class="text-right">
          更新日期
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow
        v-for="(tool, index) in tools"
        :key="tool.name"
        :class="tool.maintenance ? 'opacity-60' : ''"
      >
        <TableCell class="font-mono tabular-nums">
          {{ medals[index] ?? index + 1 }}
        </TableCell>
        <TableCell class="font-medium">
          {{ tool.name }}
          <span v-if="tool.maintenance" class="ml-2 font-mono label-xs text-muted-foreground">维护中</span>
        </TableCell>
        <TableCell>
          <RatingStars :value="tool.rating" variant="dot" />
        </TableCell>
        <TableCell class="text-right font-mono tabular-nums">
          {{ tool.updated }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
