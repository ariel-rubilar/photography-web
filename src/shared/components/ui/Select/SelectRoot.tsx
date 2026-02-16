import { Select as SelectPrimitive } from "radix-ui";

const SelectRoot = ({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) => {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
};

export { SelectRoot };
