import { VariantProps } from "class-variance-authority";
import { textVariants } from "./textVariants";

type TextElement = "p" | "span" | "div";

type TextProps = React.HTMLAttributes<HTMLElement> & {
  as?: TextElement;
  asChild?: boolean;
} & VariantProps<typeof textVariants>;

export type { TextProps };
