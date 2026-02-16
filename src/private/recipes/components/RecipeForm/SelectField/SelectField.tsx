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
    <div className="flex flex-col gap-2">
      <Label className="text-sm text-muted-foreground">{label}</Label>
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
    </div>
  );
};

export { SelectField };
