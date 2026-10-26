<script setup lang="ts">
import { FlexRender, useTable } from "@tanstack/vue-table"
import { ChevronDown } from "lucide-vue-next"
import { computed, ref } from "vue"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableEmpty,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { columns, features } from "./columns"
import { tools } from "./data"

const columnLabels: Record<string, string> = {
  name: "工具名",
  tag: "标签",
  rating: "评分",
  status: "状态",
  updated: "更新日期",
}

const table = useTable({
  features,
  columns,
  data: tools,
  initialState: { pagination: { pageIndex: 0, pageSize: 5 } },
})

const nameFilter = ref("")
function onFilterInput(value: string | number) {
  nameFilter.value = String(value)
  table.getColumn("name")?.setFilterValue(nameFilter.value || undefined)
}

const selectedCount = computed(() => table.getSelectedRowModel().rows.length)
const totalCount = computed(() => table.getCoreRowModel().rows.length)
</script>

<template>
  <div class="w-full max-w-3xl space-y-3">
    <div class="flex flex-wrap items-center justify-between gap-2">
      <Input
        :model-value="nameFilter"
        placeholder="筛选工具名"
        aria-label="筛选工具名"
        class="max-w-xs"
        @update:model-value="onFilterInput"
      />
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline" size="sm">
            列显示
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="w-44">
          <DropdownMenuLabel>显示的列</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            v-for="column in table.getAllColumns().filter((c) => c.getCanHide())"
            :key="column.id"
            :model-value="column.getIsVisible()"
            @update:model-value="(value: boolean | 'indeterminate') => column.toggleVisibility(!!value)"
          >
            {{ columnLabels[column.id] ?? column.id }}
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <Table>
      <TableHeader>
        <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
          <TableHead v-for="header in headerGroup.headers" :key="header.id">
            <FlexRender v-if="!header.isPlaceholder" :header="header" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template v-if="table.getRowModel().rows.length">
          <TableRow
            v-for="row in table.getRowModel().rows"
            :key="row.id"
            :data-state="row.getIsSelected() ? 'selected' : undefined"
            :class="row.original.status === '维护中' ? 'opacity-60' : ''"
          >
            <TableCell v-for="cell in row.getAllCells()" :key="cell.id">
              <FlexRender :cell="cell" />
            </TableCell>
          </TableRow>
        </template>
        <TableEmpty v-else :colspan="columns.length">
          没有符合条件的工具
        </TableEmpty>
      </TableBody>
    </Table>

    <div class="flex flex-wrap items-center justify-between gap-2">
      <p class="font-mono label-sm tabular-nums text-muted-foreground">
        已选 {{ selectedCount }} / {{ totalCount }} 行
      </p>
      <div class="flex items-center gap-2">
        <Button variant="outline" size="sm" :disabled="!table.getCanPreviousPage()" @click="table.previousPage()">
          上一页
        </Button>
        <span class="font-mono label-sm tabular-nums text-muted-foreground">
          第 {{ table.atoms.pagination.get().pageIndex + 1 }} / {{ Math.max(table.getPageCount(), 1) }} 页
        </span>
        <Button variant="outline" size="sm" :disabled="!table.getCanNextPage()" @click="table.nextPage()">
          下一页
        </Button>
      </div>
    </div>
  </div>
</template>
