import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Alert } from "./Alert.vue";
export { default as AlertDescription } from "./AlertDescription.vue";
export { default as AlertTitle } from "./AlertTitle.vue";

export const alertVariants = cva(
  [
    "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 px-4 py-3 body-sm",
    "has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3",
    "[&>svg]:size-4 [&>svg]:translate-y-1 [&>svg]:text-current",
  ],
  {
    variants: {
      variant: {
        default: "rounded-md border bg-card text-card-foreground",
        /** 4px indigo edge bar + wash; radius on the right corners only (notice-panel recipe). */
        indigo:
          "rounded-r-sm border-l-4 border-indigo-bar bg-indigo-wash text-foreground [&>svg]:text-indigo-text *:data-[slot=alert-title]:text-indigo-text *:data-[slot=alert-description]:text-foreground/80",
        /** The warning-banner recipe: orange icon (3:1 non-text), warning-text at weight 500 (6.9:1). */
        warning:
          "rounded-r-sm border-l-4 border-warning-bar bg-warning-wash font-medium text-warning-text [&>svg]:text-warning *:data-[slot=alert-description]:text-warning-text",
        /** Red as text only — the container stays a plain surface (DESIGN.md Colors). */
        destructive:
          "rounded-md border bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type AlertVariants = VariantProps<typeof alertVariants>;
