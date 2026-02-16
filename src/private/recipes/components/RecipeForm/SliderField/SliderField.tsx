import { Field } from "@/shared/components/ui/Field";
import { Slider } from "@/shared/components/ui/Slider";
import { Text } from "@/shared/components/ui/Text";

const SLIDER_RANGE = { min: -4, max: 4 };

const SliderField = ({
  label,
  value,
  onChange,
  min = SLIDER_RANGE.min,
  max = SLIDER_RANGE.max,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) => {
  return (
    <Field.Root className="flex flex-col gap-3">
      <Field.Title className="flex items-center justify-between">
        <Field.Label>{label}</Field.Label>
        <Text
          as={"span"}
          variant={"small"}
          className="font-mono tabular-nums text-foreground"
        >
          {value > 0 ? `+${value}` : value}
        </Text>
      </Field.Title>
      <Slider
        min={min}
        max={max}
        step={1}
        value={[value]}
        onValueChange={(v) => onChange(v[0])}
      />
      <Field.Description className="flex justify-between">
        <span>{min}</span>
        <span>0</span>
        <span>{`+${max}`}</span>
      </Field.Description>
    </Field.Root>
  );
};

export { SliderField };
