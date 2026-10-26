import type { ComputedRef, InjectionKey, Ref } from "vue"
import { computed, inject, reactive, ref } from "vue"

export interface CommandEntry {
  group?: symbol
  visible: boolean
}

export interface CommandContext {
  search: Ref<string>
  hasVisibleItems: ComputedRef<boolean>
  register: (id: symbol, entry: CommandEntry) => void
  unregister: (id: symbol) => void
  isGroupVisible: (group: symbol) => boolean
}

export const commandKey: InjectionKey<CommandContext> = Symbol("command")
export const commandGroupKey: InjectionKey<symbol> = Symbol("command-group")

export function createCommandContext(): CommandContext {
  const search = ref("")
  const entries = reactive(new Map<symbol, CommandEntry>())

  return {
    search,
    hasVisibleItems: computed(() => [...entries.values()].some(entry => entry.visible)),
    register: (id, entry) => {
      entries.set(id, entry)
    },
    unregister: (id) => {
      entries.delete(id)
    },
    isGroupVisible: group => [...entries.values()].some(entry => entry.group === group && entry.visible),
  }
}

export function injectCommand(): CommandContext {
  const ctx = inject(commandKey, null)
  if (!ctx)
    throw new Error("Command parts must be rendered inside <Command>.")
  return ctx
}
