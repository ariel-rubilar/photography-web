import { cva } from "class-variance-authority";

const headingVariants = cva("scroll-m-20", {
  variants: {
    level: {
      1: "text-center text-4xl font-extrabold tracking-tight text-balance",
      2: "border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      3: "text-2xl font-semibold tracking-tight",
      4: "text-xl font-semibold tracking-tight",
      5: "text-xl font-semibold tracking-tight",
      6: "text-xl font-semibold tracking-tight",
    },
  },
  defaultVariants: {
    level: 1,
  },
});

export { headingVariants };
