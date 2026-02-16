import { cn } from "@/shared/lib/cn";

const CardContent = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
};

export { CardContent };
