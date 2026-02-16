import { Field } from "@/shared/components/ui/Field";
import { Label } from "@/shared/components/ui/Label";
import { Select } from "@/shared/components/ui/Select";

const SelectField = ({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) => {
  return (
    <Field.Root>
      <Field.Label>{label}</Field.Label>
      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger>
          <Select.Value placeholder={placeholder} />
        </Select.Trigger>
        <Select.Content>
          {options.map((opt) => (
            <Select.Item key={opt} value={opt}>
              {opt}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </Field.Root>
  );
};

export { SelectField };
