import type { Tool } from "./data"
import { ArrowUpDown } from "lucide-vue-next"
import {
  columnFilteringFeature,
  columnVisibilityFeature,
  createColumnHelper,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  filterFn_includesString,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  tableFeatures,
} from "@tanstack/vue-table"
import { h } from "vue"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RatingStars } from "@/components/ui/rating"

export const features = tableFeatures({
  columnFilteringFeature,
  columnVisibilityFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  filteredRowModel: createFilteredRowModel(),
  sortedRowModel: createSortedRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
})

const helper = createColumnHelper<typeof features, Tool>()

/** Header label for a sortable column: verb-free text plus a sort indicator. */
function sortableHeader(label: string) {
  return ({ column }: { column: { toggleSorting: (desc?: boolean) => void, getIsSorted: () => false | "asc" | "desc" } }) =>
    h(
      Button,
      {
        variant: "ghost",
        size: "sm",
        class: "-ml-3 font-mono label-sm",
        onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
      },
      () => [label, h(ArrowUpDown, { class: "size-3.5" })],
    )
}

export const columns = helper.columns([
  helper.display({
    id: "select",
    enableSorting: false,
    enableHiding: false,
    header: ({ table }) =>
      h(Checkbox, {
        modelValue: table.getIsAllPageRowsSelected()
          ? true
          : table.getIsSomePageRowsSelected() ? "indeterminate" : false,
        "aria-label": "选择本页全部工具",
        "onUpdate:modelValue": (value: boolean | "indeterminate") => table.toggleAllPageRowsSelected(!!value),
      }),
    cell: ({ row }) =>
      h(Checkbox, {
        modelValue: row.getIsSelected(),
        "aria-label": `选择 ${row.original.name}`,
        "onUpdate:modelValue": (value: boolean | "indeterminate") => row.toggleSelected(!!value),
      }),
  }),
  helper.accessor("name", {
    header: sortableHeader("工具名"),
    cell: ({ getValue }) => h("span", { class: "font-medium" }, getValue()),
    filterFn: filterFn_includesString,
  }),
  helper.accessor("tag", {
    header: "标签",
    cell: ({ getValue }) => h("span", { class: "font-mono label-sm text-muted-foreground" }, getValue()),
    enableSorting: false,
  }),
  helper.accessor("rating", {
    header: sortableHeader("评分"),
    cell: ({ getValue }) => h(RatingStars, { value: getValue(), variant: "dot", showScore: true }),
  }),
  helper.accessor("status", {
    header: "状态",
    cell: ({ getValue }) =>
      h(
        "span",
        { class: getValue() === "维护中" ? "font-mono label-sm text-warning-text" : "font-mono label-sm text-muted-foreground" },
        getValue(),
      ),
    enableSorting: false,
  }),
  helper.accessor("updated", {
    header: sortableHeader("更新日期"),
    cell: ({ getValue }) => h("span", { class: "font-mono tabular-nums" }, getValue()),
  }),
])
