import type { InjectionKey } from "vue";
import type { ToggleVariants } from "@/components/ui/toggle";

export { default as ToggleGroup } from "./ToggleGroup.vue";
export { default as ToggleGroupItem } from "./ToggleGroupItem.vue";

/** Group-level variant/size, provided to items so they share the toggle recipe. */
export interface ToggleGroupContext {
  variant: () => ToggleVariants["variant"]
  size: () => ToggleVariants["size"]
}

export const TOGGLE_GROUP_CONTEXT: InjectionKey<ToggleGroupContext> = Symbol("ToggleGroupContext");
