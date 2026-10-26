import type { ComputedRef, Ref } from "vue"
import { inject } from "vue"

export const SIDEBAR_KEY = Symbol("paperlamp-sidebar")

export interface SidebarContext {
  state: ComputedRef<"expanded" | "collapsed">
  open: Ref<boolean>
  setOpen: (value: boolean) => void
  isMobile: Ref<boolean>
  openMobile: Ref<boolean>
  setOpenMobile: (value: boolean) => void
  toggleSidebar: () => void
}

/** Reads the sidebar state provided by SidebarProvider. Must be used inside it. */
export function useSidebar(): SidebarContext {
  const context = inject<SidebarContext | null>(SIDEBAR_KEY, null)
  if (!context)
    throw new Error("useSidebar must be used within a SidebarProvider.")
  return context
}
