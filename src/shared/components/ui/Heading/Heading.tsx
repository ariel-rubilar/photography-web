import { cn } from "@/shared/lib/cn";
import { Slot } from "radix-ui";
import { headingVariants } from "./headingVariants";
import { HeadingProps } from "./types";

const Heading = ({
  level = 1,
  asChild = false,
  className,
  as,
  children,
  ...props
}: HeadingProps) => {
  const Comp = asChild ? Slot.Root : (as ?? `h${level}`);

  return (
    <Comp
      className={cn(
        headingVariants({
          level,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};

export { Heading };
