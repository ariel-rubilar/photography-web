import { Card } from "@/shared/components/ui/Card";
import { Heading } from "@/shared/components/ui/Heading";
import { Input } from "@/shared/components/ui/Input";
import { Separator } from "@/shared/components/ui/Separator";
import { Sun } from "lucide-react";
import { WHITE_BALANCE_OPTIONS } from "../options";
import { SelectField } from "../SelectField";
import { SliderField } from "../SliderField";
import { Text } from "@/shared/components/ui/Text";
import { Label } from "@/shared/components/ui/Label";
import { InputGroup } from "@/shared/components/ui/InputGroup";
import { Field } from "@/shared/components/ui/Field";

const ExposureSection = () => {
  return (
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
              <Field.Root>
                <Field.Label>Color Temperature</Field.Label>
                <InputGroup.Root className="max-w-xs">
                  <InputGroup.Input
                    placeholder="e.g. 3500"
                    type="number"
                    min={2500}
                    max={10000}
                    step={100}
                  />

                  <InputGroup.Addon align="inline-end" className="font-mono">
                    K
                  </InputGroup.Addon>
                </InputGroup.Root>
                <Field.Description>2500K - 10000K</Field.Description>
              </Field.Root>
            </div>
          </div>

          {/* WB Shift (Red / Blue) - shown for non-Kelvin modes */}

          <div className="rounded-lg border border-border bg-secondary/30 p-4">
            <Label className="mb-4 block text-sm font-medium text-foreground">
              WB Shift
            </Label>
            <div className="grid gap-6 md:grid-cols-2">
              <SliderField
                label="Red"
                value={0}
                onChange={(v) => {}}
                min={-9}
                max={9}
              />

              <SliderField
                label="Blue"
                value={0}
                onChange={(v) => {}}
                min={-9}
                max={9}
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Field.Root>
              <Field.Label>ISO</Field.Label>
              <Input placeholder="e.g. Auto up to 6400" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Exposure Compensation</Field.Label>
              <Input placeholder="e.g. 0, +1/3, -2/3" />
            </Field.Root>
          </div>
        </div>
      </Card.Content>
    </Card.Root>
  );
};

export { ExposureSection };
