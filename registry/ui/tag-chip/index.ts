import type { VariantProps } from "class-variance-authority";
import type { InjectionKey } from "vue";
import { cva } from "class-variance-authority";

export { default as TagChip } from "./TagChip.vue";
export { default as TagChipGroup } from "./TagChipGroup.vue";
export { default as TagChipGroupItem } from "./TagChipGroupItem.vue";

/**
 * Mono pill on surface. Hover, keyboard focus and the pressed state all invert hard
 * to ink — there is no in-between tint (DESIGN.md tag-chip / tag-chip-active).
 */
export const tagChipVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border bg-card text-muted-foreground",
    "transition-[color,background-color,border-color] duration-150 ease-quiet",
    "hover:border-primary hover:bg-primary hover:text-primary-foreground",
    "outline-none focus-visible:border-primary focus-visible:bg-primary focus-visible:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "data-[state=on]:border-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
  ],
  {
    variants: {
      size: {
        default: "px-4 py-1 label-md",
        sm: "px-3 py-0.5 label-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export type TagChipVariants = VariantProps<typeof tagChipVariants>;

export const TAG_CHIP_GROUP_SIZE: InjectionKey<() => TagChipVariants["size"]> = Symbol("TagChipGroupSize");
