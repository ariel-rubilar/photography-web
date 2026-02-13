import { cn } from "@/shared/lib/cn";

const EmptyDescription = ({
  className,
  ...props
}: React.ComponentProps<"p">) => {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        className,
      )}
      {...props}
    />
  );
};

export { EmptyDescription };
