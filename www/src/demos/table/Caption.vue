<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableEmpty,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
</script>

<template>
  <div class="grid gap-6">
    <Table>
      <TableCaption>只显示标签「小游戏」下的工具，按更新时间排序。</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>工具</TableHead>
          <TableHead>最近更新</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell class="font-medium">古诗接龙</TableCell>
          <TableCell class="font-mono tabular-nums">2026-10-12</TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="font-medium">像素小镇生成器</TableCell>
          <TableCell class="font-mono tabular-nums">2026-10-18</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>工具</TableHead>
          <TableHead>最近更新</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableEmpty :colspan="2">
          没有符合条件的工具。换个标签试试。
        </TableEmpty>
      </TableBody>
    </Table>
  </div>
</template>
