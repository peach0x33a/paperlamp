<script setup lang="ts" generic="T extends string">
import { useMediaQuery } from "@vueuse/core"
import { Check } from "lucide-vue-next"
import {
  DropdownMenuContent,
  DropdownMenuItemIndicator,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "reka-ui"
import { computed } from "vue"

export interface PickerOption<V extends string> {
  value: V
  label: string
  /** Muted text on the right, e.g. "8px". */
  hint?: string
}

// One builder field. The first option is the default and is set apart by a separator.
// Hovering an option previews it (desktop only); leaving or closing clears the preview.
const props = defineProps<{
  title: string
  options: PickerOption<T>[]
  modelValue: T
}>()
const emit = defineEmits<{
  "update:modelValue": [value: T]
  "preview": [value: T | null]
}>()

const wide = useMediaQuery("(min-width: 768px)")
const current = computed(() => props.options.find(o => o.value === props.modelValue) ?? props.options[0]!)
const preview = (v: T) => wide.value && emit("preview", v)
</script>

<template>
  <DropdownMenuRoot @update:open="(o) => !o && emit('preview', null)">
    <DropdownMenuTrigger
      class="relative flex w-full items-center rounded-sm px-3 py-2 text-left transition-colors duration-150 ease-quiet outline-none hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring data-[state=open]:bg-accent"
    >
      <span class="flex min-w-0 flex-col">
        <span class="label-sm text-muted-foreground">{{ title }}</span>
        <span class="truncate text-sm font-bold">
          {{ current.label }}
          <span v-if="current.hint" class="label-sm font-medium text-muted-foreground">{{ current.hint }}</span>
        </span>
      </span>
      <span class="pointer-events-none absolute top-1/2 right-3 flex -translate-y-1/2 items-center">
        <slot name="icon" :value="current.value" />
      </span>
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent
        :side="wide ? 'right' : 'bottom'"
        :align="wide ? 'start' : 'center'"
        :side-offset="12"
        class="z-50 max-h-[var(--reka-dropdown-menu-content-available-height)] min-w-52 overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
        @pointerleave="emit('preview', null)"
      >
        <DropdownMenuRadioGroup :model-value="modelValue" @update:model-value="(v) => emit('update:modelValue', v as T)">
          <template v-for="(o, i) in options" :key="o.value">
            <DropdownMenuSeparator v-if="i === 1" class="-mx-1 my-1 h-px bg-border" />
            <DropdownMenuRadioItem
              :value="o.value"
              class="relative flex cursor-default items-center gap-3 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none data-[highlighted]:bg-accent"
              @pointerenter="preview(o.value)"
              @focus="preview(o.value)"
            >
              <slot name="icon" :value="o.value" />
              <span class="flex-1">{{ o.label }}</span>
              <span v-if="o.hint" class="label-sm text-muted-foreground">{{ o.hint }}</span>
              <DropdownMenuItemIndicator class="absolute right-2 inline-flex items-center">
                <Check class="size-4" />
              </DropdownMenuItemIndicator>
            </DropdownMenuRadioItem>
          </template>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
