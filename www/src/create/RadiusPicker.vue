<script setup lang="ts">
import type { RadiusName } from "../../../packages/cli/src/preset"
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
import { RADII, usePreset } from "./usePreset"

const { preset, set, setOverride, clearOverride } = usePreset()
const wide = useMediaQuery("(min-width: 768px)")

const current = computed(() => RADII.find(r => r.name === preset.value.radius)!)
const defaultRadius = RADII.find(r => r.name === "default")!
const others = RADII.filter(r => r.name !== "default")

function choose(v: unknown) {
  set({ radius: v as RadiusName })
}
function preview(v: RadiusName) {
  if (wide.value)
    setOverride({ radius: v })
}
</script>

<template>
  <DropdownMenuRoot @update:open="(o) => !o && clearOverride()">
    <DropdownMenuTrigger
      class="group/picker relative flex w-full items-center rounded-sm px-3 py-2 text-left transition-colors duration-150 ease-quiet outline-none hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring data-[state=open]:bg-accent"
    >
      <span class="flex flex-col">
        <span class="label-sm text-muted-foreground">圆角</span>
        <span class="text-sm font-bold">{{ current.label }} <span class="label-sm font-medium text-muted-foreground">{{ current.value }}</span></span>
      </span>
      <svg
        class="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 rotate-90"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20v-5C4 8.925 8.925 4 15 4h5" />
      </svg>
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent
        :side="wide ? 'right' : 'bottom'"
        :align="wide ? 'start' : 'center'"
        :side-offset="12"
        class="z-50 min-w-48 rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
        @pointerleave="clearOverride"
      >
        <DropdownMenuRadioGroup :model-value="preset.radius" @update:model-value="choose">
          <template v-for="(r, i) in [defaultRadius, ...others]" :key="r.name">
            <DropdownMenuSeparator v-if="i === 1" class="-mx-1 my-1 h-px bg-border" />
            <DropdownMenuRadioItem
              :value="r.name"
              class="relative flex cursor-default items-center gap-3 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none data-[highlighted]:bg-accent"
              @pointerenter="preview(r.name)"
              @focus="preview(r.name)"
            >
              <span class="size-4 shrink-0 rounded-tl-[var(--r)] border-t-2 border-l-2 border-current" :style="{ '--r': r.value }" aria-hidden="true" />
              <span class="flex-1">{{ r.label }}</span>
              <span class="label-sm text-muted-foreground">{{ r.value }}</span>
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
