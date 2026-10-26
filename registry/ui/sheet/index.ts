import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Sheet } from "./Sheet.vue";
export { default as SheetClose } from "./SheetClose.vue";
export { default as SheetContent } from "./SheetContent.vue";
export { default as SheetDescription } from "./SheetDescription.vue";
export { default as SheetFooter } from "./SheetFooter.vue";
export { default as SheetHeader } from "./SheetHeader.vue";
export { default as SheetOverlay } from "./SheetOverlay.vue";
export { default as SheetTitle } from "./SheetTitle.vue";
export { default as SheetTrigger } from "./SheetTrigger.vue";

/** Side panel: bg-card, border on the inner edge, shadow-2xl, 300ms ease-quiet slide (the only slide allowed). */
export const sheetVariants = cva(
  "fixed z-60 flex flex-col gap-6 overflow-y-auto bg-card p-8 text-card-foreground shadow-2xl outline-none duration-300 ease-quiet data-[state=open]:animate-in data-[state=closed]:animate-out fade-in-0 fade-out-0",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 h-auto max-h-[80svh] border-b slide-in-from-top data-[state=closed]:slide-out-to-top",
        bottom: "inset-x-0 bottom-0 h-auto max-h-[80svh] border-t slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 max-w-sm border-r slide-in-from-left data-[state=closed]:slide-out-to-left",
        right: "inset-y-0 right-0 h-full w-3/4 max-w-sm border-l slide-in-from-right data-[state=closed]:slide-out-to-right",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

export type SheetVariants = VariantProps<typeof sheetVariants>;
