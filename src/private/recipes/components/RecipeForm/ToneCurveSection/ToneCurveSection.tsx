import { Card } from "@/shared/components/ui/Card";
import { Heading } from "@/shared/components/ui/Heading";
import { Separator } from "@/shared/components/ui/Separator";
import { Text } from "@/shared/components/ui/Text";
import { Aperture } from "lucide-react";
import { SliderField } from "../SliderField";
import { FormInputs } from "../schema";
import { Controller, useFormContext } from "react-hook-form";

const ToneCurveSection = () => {
  const form = useFormContext<FormInputs>();

  return (
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
          <Controller
            name="settings.highlight"
            control={form.control}
            render={({ field: { value, onChange } }) => {
              return (
                <SliderField
                  label="Highlight"
                  value={value}
                  onChange={(v) => {
                    onChange(v);
                  }}
                />
              );
            }}
          />
          <SliderField label="Shadow" value={0} onChange={(v) => {}} />
          <SliderField label="Color" value={0} onChange={(v) => {}} />
          <SliderField label="Noise Reduction" value={0} onChange={(v) => {}} />
          <SliderField label="Sharpening" value={0} onChange={(v) => {}} />
          <SliderField label="Clarity" value={0} onChange={(v) => {}} />
        </div>
      </Card.Content>
    </Card.Root>
  );
};

export { ToneCurveSection };
