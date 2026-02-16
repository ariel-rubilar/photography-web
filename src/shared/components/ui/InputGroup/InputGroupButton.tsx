import { cn } from "@/shared/lib/cn";
import { VariantProps } from "class-variance-authority";
import { Button } from "../Button";
import { inputGroupButtonVariants } from "./inputGroupButtonVariants";

const InputGroupButton = ({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) => {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
};

export { InputGroupButton };
