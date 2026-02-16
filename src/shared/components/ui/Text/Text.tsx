import { cn } from "@/shared/lib/cn";
import { Slot } from "radix-ui";
import * as React from "react";
import { TextProps } from "./types";
import { textVariants } from "./textVariants";

const Text = ({
  variant = "body",
  as = "p",
  asChild = false,
  className,
  ...props
}: TextProps) => {
  const Comp = asChild ? Slot.Root : as;

  return (
    <Comp
      className={cn(
        textVariants({
          variant,
        }),
        className,
      )}
      {...props}
    />
  );
};

export { Text };
