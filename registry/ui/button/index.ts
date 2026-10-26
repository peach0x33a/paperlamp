import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-bold",
    "transition-[color,background-color,border-color,opacity] duration-150 ease-quiet",
    "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        /** Ink fill, paper text — the one primary action per view. */
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        /** Quiet neutral fill built from the border token. */
        secondary: "bg-secondary text-secondary-foreground hover:bg-accent",
        /** Bordered surface; hover swaps to paper (DESIGN.md button-secondary). */
        outline: "border bg-card text-card-foreground hover:bg-background",
        /** No chrome until hover. */
        ghost: "text-foreground hover:bg-accent",
        /** Red appears as text only — never as a fill (DESIGN.md Colors). */
        destructive: "border bg-card text-destructive hover:bg-background",
        link: "text-foreground underline-offset-4 hover:underline",
        /** Signature register: `[登录]` — mono, muted, hover to ink with underline. */
        bracket:
          "font-mono font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline before:content-['['] after:content-[']']",
        /** Bracket form on the indigo accent — the `[评分]` trigger. */
        "bracket-indigo":
          "font-mono text-indigo-text underline-offset-4 hover:text-indigo hover:underline before:content-['['] after:content-[']']",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 text-xs has-[>svg]:px-2.5",
        lg: "h-11 px-6 py-3 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    compoundVariants: [
      { variant: ["bracket", "bracket-indigo", "link"], class: "h-auto gap-0 px-0 py-0 has-[>svg]:px-0" },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
