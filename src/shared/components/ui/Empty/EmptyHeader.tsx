import { cn } from "@/shared/lib/cn";

const EmptyHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        className,
      )}
      {...props}
    />
  );
};

export { EmptyHeader };
