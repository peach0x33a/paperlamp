import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as NoticePanel } from "./NoticePanel.vue";
export { default as NoticePanelContent } from "./NoticePanelContent.vue";
export { default as NoticePanelTrigger } from "./NoticePanelTrigger.vue";

/** CollapsiblePanel: 4px left edge bar, soft wash, radius on the right corners only, shadow-sm. */
export const noticePanelVariants = cva("group/notice-panel rounded-r-sm border-l-4 body-sm shadow-sm", {
  variants: {
    variant: {
      /** AI 总结 — accent appears only as edge tint, wash and title text. */
      indigo: "border-indigo-bar bg-indigo-wash",
      neutral: "border-muted-foreground/40 bg-border/30",
    },
  },
  defaultVariants: {
    variant: "indigo",
  },
});

export type NoticePanelVariants = VariantProps<typeof noticePanelVariants>;
