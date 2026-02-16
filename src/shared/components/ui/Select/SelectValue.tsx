import { Select as SelectPrimitive } from "radix-ui";

const SelectValue = ({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) => {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
};

export { SelectValue };
