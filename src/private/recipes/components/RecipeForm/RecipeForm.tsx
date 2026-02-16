"use client";

import { Button } from "@/shared/components/ui/Button";
import { Card } from "@/shared/components/ui/Card";
import { Heading } from "@/shared/components/ui/Heading";
import { Input } from "@/shared/components/ui/Input";
import { Label } from "@/shared/components/ui/Label";
import { Select } from "@/shared/components/ui/Select";
import { Separator } from "@/shared/components/ui/Separator";
import { Slider } from "@/shared/components/ui/Slider";
import { Text } from "@/shared/components/ui/Text";
import {
  Aperture,
  Camera,
  Check,
  Film,
  Link2,
  RotateCcw,
  Sun,
} from "lucide-react";

const FILM_SIMULATIONS = [
  "Provia/Standard",
  "Velvia/Vivid",
  "Astia/Soft",
  "Classic Chrome",
  "Pro Neg Hi",
  "Pro Neg Std",
  "Classic Neg",
  "Nostalgic Neg",
  "Eterna/Cinema",
  "Eterna Bleach Bypass",
  "Acros",
  "Acros+Ye Filter",
  "Acros+R Filter",
  "Acros+G Filter",
  "Mono",
  "Mono+Ye Filter",
  "Mono+R Filter",
  "Mono+G Filter",
  "Reala Ace",
];

const DYNAMIC_RANGE_OPTIONS = ["DR100", "DR200", "DR400", "Auto"];

const GRAIN_EFFECT_OPTIONS = [
  "Off",
  "Weak/Small",
  "Weak/Large",
  "Strong/Small",
  "Strong/Large",
];

const COLOR_CHROME_OPTIONS = ["Off", "Weak", "Strong"];

const WHITE_BALANCE_OPTIONS = [
  "Auto",
  "Auto White Priority",
  "Auto Ambiance Priority",
  "Daylight",
  "Shade",
  "Fluorescent 1",
  "Fluorescent 2",
  "Fluorescent 3",
  "Incandescent",
  "Underwater",
  "Kelvin",
];

function SelectField({
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
}) {
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
}

const SLIDER_RANGE = { min: -4, max: 4 };

function SliderField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <Label className="text-sm text-muted-foreground">{label}</Label>
        <span className="font-mono text-sm tabular-nums text-foreground">
          {value > 0 ? `+${value}` : value}
        </span>
      </div>
      <Slider
        min={SLIDER_RANGE.min}
        max={SLIDER_RANGE.max}
        step={1}
        value={[value]}
        onValueChange={(v) => onChange(v[0])}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{SLIDER_RANGE.min}</span>
        <span>0</span>
        <span>{`+${SLIDER_RANGE.max}`}</span>
      </div>
    </div>
  );
}

const RecipeForm = () => {
  return (
    <form className="flex flex-col gap-8">
      {/* Recipe Name & Link */}
      <Card.Root>
        <Card.Content className="flex flex-col gap-6 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Camera className="h-4 w-4 text-primary" />
            </div>
            <div>
              <Heading level={3}>Recipe Details</Heading>
              <Text variant={"muted"}>
                Name your recipe and add a reference link
              </Text>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="recipe-name"
                className="text-sm text-muted-foreground"
              >
                Recipe Name <span className="text-primary">*</span>
              </Label>
              <Input
                id="recipe-name"
                placeholder="e.g. Kodak Portra 400 Look"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="recipe-link"
                className="text-sm text-muted-foreground"
              >
                Reference Link
              </Label>
              <div className="relative">
                <Link2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="recipe-link"
                  placeholder="https://fujixweekly.com/..."
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </Card.Content>
      </Card.Root>

      {/* Film & Color Section */}
      <Card.Root>
        <Card.Content className="flex flex-col gap-6 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Film className="h-4 w-4 text-primary" />
            </div>
            <div>
              <Heading level={3}>Film & Color</Heading>
              <Text variant={"muted"}>
                Film simulation, dynamic range, and chrome effects
              </Text>
            </div>
          </div>
          <Separator />
          <div className="grid gap-6 md:grid-cols-2">
            <SelectField
              label="Film Simulation"
              value={""}
              onChange={(v) => {}}
              options={FILM_SIMULATIONS}
              placeholder="Select simulation"
            />
            <SelectField
              label="Dynamic Range"
              value={""}
              onChange={(v) => {}}
              options={DYNAMIC_RANGE_OPTIONS}
              placeholder="Select DR"
            />
            <SelectField
              label="Grain Effect"
              value={""}
              onChange={(v) => {}}
              options={GRAIN_EFFECT_OPTIONS}
              placeholder="Select grain"
            />
            <SelectField
              label="Color Chrome Effect"
              value={""}
              onChange={(v) => {}}
              options={COLOR_CHROME_OPTIONS}
              placeholder="Select effect"
            />
            <SelectField
              label="Color Chrome FX Blue"
              value={""}
              onChange={(v) => {}}
              options={COLOR_CHROME_OPTIONS}
              placeholder="Select blue"
            />
          </div>
        </Card.Content>
      </Card.Root>

      {/* Tone Curve Section */}
      <Card.Root>
        <Card.Content className="flex flex-col gap-6 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Aperture className="h-4 w-4 text-primary" />
            </div>
            <div>
              <Heading level={3}>Tone & Detail</Heading>
              <Text variant={"muted"}>
                Highlight, shadow, color, sharpening, and clarity
              </Text>
            </div>
          </div>
          <Separator />
          <div className="grid gap-8 md:grid-cols-2">
            <SliderField label="Highlight" value={0} onChange={(v) => {}} />
            <SliderField label="Shadow" value={0} onChange={(v) => {}} />
            <SliderField label="Color" value={0} onChange={(v) => {}} />
            <SliderField
              label="Noise Reduction"
              value={0}
              onChange={(v) => {}}
            />
            <SliderField label="Sharpening" value={0} onChange={(v) => {}} />
            <SliderField label="Clarity" value={0} onChange={(v) => {}} />
          </div>
        </Card.Content>
      </Card.Root>

      {/* Exposure Section */}
      <Card.Root>
        <Card.Content className="flex flex-col gap-6 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Sun className="h-4 w-4 text-primary" />
            </div>
            <div>
              <Heading level={3}>Exposure & White Balance</Heading>
              <Text variant={"muted"}>
                ISO, exposure compensation, and white balance
              </Text>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <SelectField
                label="White Balance"
                value={""}
                onChange={(v) => {}}
                options={WHITE_BALANCE_OPTIONS}
                placeholder="Select WB"
              />

              {/* Kelvin temperature input */}
              <div className="flex flex-col gap-2">
                <Label className="text-sm text-muted-foreground">
                  Color Temperature
                </Label>
                <div className="relative">
                  <Input
                    type="number"
                    min={2500}
                    max={10000}
                    step={100}
                    placeholder="e.g. 3500"
                    className="pr-8"
                  />
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground">
                    K
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">2500K - 10000K</p>
              </div>
            </div>

            {/* WB Shift (Red / Blue) - shown for non-Kelvin modes */}

            <div className="rounded-lg border border-border bg-secondary/30 p-4">
              <Label className="mb-4 block text-sm font-medium text-foreground">
                WB Shift
              </Label>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Red</span>
                    <span className="font-mono text-sm tabular-nums text-foreground">
                      {"0"}
                    </span>
                  </div>
                  <Slider
                    min={-9}
                    max={9}
                    step={1}
                    value={[0]}
                    onValueChange={(v) => {}}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>-9</span>
                    <span>0</span>
                    <span>+9</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Blue</span>
                    <span className="font-mono text-sm tabular-nums text-foreground">
                      {"0"}
                    </span>
                  </div>
                  <Slider
                    min={-9}
                    max={9}
                    step={1}
                    value={[0]}
                    onValueChange={(v) => {}}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>-9</span>
                    <span>0</span>
                    <span>+9</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label className="text-sm text-muted-foreground">ISO</Label>
                <Input placeholder="e.g. Auto up to 6400" />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-sm text-muted-foreground">
                  Exposure Compensation
                </Label>
                <Input placeholder="e.g. 0, +1/3, -2/3" />
              </div>
            </div>
          </div>
        </Card.Content>
      </Card.Root>

      {/* Preview Summary */}
      <Card.Root className="border-primary/20 bg-primary/5">
        <Card.Content className="p-6">
          <Heading level={3} className="mb-4">
            Recipe Summary
          </Heading>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm md:grid-cols-3">
            <SummaryItem label="Film" value={""} />
            <SummaryItem label="DR" value={""} />
            <SummaryItem label="Grain" value={""} />
            <SummaryItem label="Chrome" value={""} />
            <SummaryItem label="Chrome Blue" value={""} />
            <SummaryItem label="WB" value={""} />
            <SummaryItem label="ISO" value={""} />
            <SummaryItem label="EV" value={""} />
            <SummaryItem label="Highlight" value={"0"} />
            <SummaryItem label="Shadow" value={"0"} />
            <SummaryItem label="Color" value={"0"} />
            <SummaryItem label="NR" value={"0"} />
            <SummaryItem label="Sharpening" value={"0"} />
            <SummaryItem label="Clarity" value={"0"} />
          </div>
        </Card.Content>
      </Card.Root>

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <Button type="button" variant="outline" className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
        <Button type="submit" className="gap-2">
          <Check className="h-4 w-4" />
          Save Recipe
        </Button>
      </div>
    </form>
  );
};

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-2 py-1">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-mono text-xs text-foreground">{value}</span>
    </div>
  );
}

export { RecipeForm };
