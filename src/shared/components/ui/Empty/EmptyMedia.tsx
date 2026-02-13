import { cn } from "@/shared/lib/cn";
import { VariantProps } from "class-variance-authority";
import { emptyMediaVariants } from "./emptyMediaVariants";

const EmptyMedia = ({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) => {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  );
};

export { EmptyMedia };
