import { cva } from "class-variance-authority";

const textVariants = cva("", {
  variants: {
    variant: {
      body: "text-base text-foreground",
      muted: "text-sm text-muted-foreground",
      small: "text-xs text-muted-foreground",
      lead: "text-lg text-foreground",
      error: "text-sm text-destructive",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export { textVariants };
