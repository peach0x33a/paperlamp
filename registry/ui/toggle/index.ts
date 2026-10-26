import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Toggle } from "./Toggle.vue";

/** Pressed = bg-accent text-foreground (neutral tint, no ink fill). */
export const toggleVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-bold text-muted-foreground",
    "transition-[color,background-color,border-color] duration-150 ease-quiet outline-none",
    "hover:bg-accent hover:text-foreground",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "data-[state=on]:bg-accent data-[state=on]:text-foreground",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-invalid:border-destructive",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border bg-transparent hover:bg-accent",
      },
      size: {
        default: "h-9 min-w-9 px-2",
        sm: "h-8 min-w-8 px-1.5 text-xs",
        lg: "h-10 min-w-10 px-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ToggleVariants = VariantProps<typeof toggleVariants>;
