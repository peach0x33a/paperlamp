<script setup lang="ts">
import type { HTMLAttributes, Ref } from "vue"
import { useMediaQuery, useVModel } from "@vueuse/core"
import { computed, onBeforeUnmount, onMounted, provide, ref } from "vue"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import type { SidebarContext } from "./utils"
import { SIDEBAR_KEY } from "./utils"

const props = withDefaults(defineProps<{
  defaultOpen?: boolean
  open?: boolean
  /** Cookie that remembers the expanded state between visits. */
  cookieName?: string
  class?: HTMLAttributes["class"]
}>(), {
  // Without an explicit undefined, Vue casts an absent boolean prop to false and the
  // sidebar would always start collapsed, ignoring defaultOpen and the cookie.
  open: undefined,
  defaultOpen: true,
  cookieName: "sidebar_state",
})
const emits = defineEmits<{ "update:open": [value: boolean] }>()

function readCookie(name: string): boolean | undefined {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=(true|false)`))
  return match ? match[1] === "true" : undefined
}

const open = useVModel(props, "open", emits, {
  passive: true,
  defaultValue: readCookie(props.cookieName) ?? props.defaultOpen,
}) as Ref<boolean>

const isMobile = useMediaQuery("(max-width: 767px)")
const openMobile = ref(false)
const state = computed(() => (open.value ? "expanded" : "collapsed"))

function setOpen(value: boolean) {
  open.value = value
  document.cookie = `${props.cookieName}=${value}; path=/; max-age=604800; SameSite=Lax`
}

function setOpenMobile(value: boolean) {
  openMobile.value = value
}

function toggleSidebar() {
  if (isMobile.value)
    setOpenMobile(!openMobile.value)
  else
    setOpen(!open.value)
}

function onKeydown(event: KeyboardEvent) {
  if (event.key.toLowerCase() === "b" && (event.metaKey || event.ctrlKey)) {
    event.preventDefault()
    toggleSidebar()
  }
}

onMounted(() => window.addEventListener("keydown", onKeydown))
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown))

provide(SIDEBAR_KEY, {
  state,
  open,
  setOpen,
  isMobile,
  openMobile,
  setOpenMobile,
  toggleSidebar,
} satisfies SidebarContext)
</script>

<template>
  <TooltipProvider>
    <div
      data-slot="sidebar-wrapper"
      :style="{ '--sidebar-width': '16rem', '--sidebar-width-icon': '3rem' }"
      :class="cn('group/sidebar-wrapper relative flex min-h-svh w-full', props.class)"
    >
      <slot />
    </div>
  </TooltipProvider>
</template>
