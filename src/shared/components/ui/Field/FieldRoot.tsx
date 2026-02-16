import { cn } from "@/shared/lib/cn";
import { VariantProps } from "class-variance-authority";
import { fieldVariants } from "./fieldVariants";

function FieldRoot({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  );
}

export { FieldRoot };
