import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Card } from "./Card.vue";
export { default as CardAction } from "./CardAction.vue";
export { default as CardContent } from "./CardContent.vue";
export { default as CardDescription } from "./CardDescription.vue";
export { default as CardFooter } from "./CardFooter.vue";
export { default as CardHeader } from "./CardHeader.vue";
export { default as CardTitle } from "./CardTitle.vue";

export const cardFooterVariants = cva("flex items-center px-6", {
  variants: {
    variant: {
      default: "[.border-t]:pt-6",
      /** The ToolCard footer: dashed hairline above mono meta (date left, score right). */
      dashed: "justify-between border-t border-dashed pt-4 label-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type CardFooterVariants = VariantProps<typeof cardFooterVariants>;
