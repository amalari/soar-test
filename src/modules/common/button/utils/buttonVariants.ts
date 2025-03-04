import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-80 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-background text-primary-light hover:bg-background/70",
        primary: "bg-primary text-white hover:bg-primary/90",
        text: "bg-transparent text-primary hover:text-primary/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
