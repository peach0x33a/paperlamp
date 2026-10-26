import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Badge } from "./Badge.vue";

export const badgeVariants = cva(
  [
    "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-sm border px-2 py-0.5 label-xs",
    "transition-[color,background-color,border-color] duration-150 ease-quiet",
    "[&>svg]:pointer-events-none [&>svg]:size-3",
  ],
  {
    variants: {
      variant: {
        /** Ink fill, paper text. */
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary-hover",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-accent",
        outline: "bg-card text-foreground [a&]:hover:bg-background",
        /**
         * 维护中 — border at 20% as the wash. Muted text on that wash measures 3.76:1,
         * so the text darkens to ink at 80% (≥4.5:1, DESIGN.md Chips & Badges).
         */
        status: "border-transparent bg-border/20 text-foreground/80",
        /** 精选 — featured ink on the amber wash with an amber hairline; pins carry shadow-sm. */
        featured: "border-featured-border bg-featured-wash text-featured shadow-sm",
        /** Hidden / admin-only content uses the indigo family. */
        indigo: "border-transparent bg-indigo-wash text-indigo-text",
        warning: "border-transparent bg-warning-wash text-warning-text",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;
