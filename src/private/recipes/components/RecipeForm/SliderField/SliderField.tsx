import { Label } from "@/shared/components/ui/Label";
import { Slider } from "@/shared/components/ui/Slider";

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
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <Label className="text-sm text-muted-foreground">{label}</Label>
        <span className="font-mono text-sm tabular-nums text-foreground">
          {value > 0 ? `+${value}` : value}
        </span>
      </div>
      <Slider
        min={min}
        max={max}
        step={1}
        value={[value]}
        onValueChange={(v) => onChange(v[0])}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{min}</span>
        <span>0</span>
        <span>{`+${max}`}</span>
      </div>
    </div>
  );
};

export { SliderField };
