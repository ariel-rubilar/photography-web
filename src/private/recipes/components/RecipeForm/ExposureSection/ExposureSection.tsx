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
              <Label className="text-sm text-muted-foreground">
                Color Temperature
              </Label>
              <InputGroup.Root className="max-w-xs">
                <InputGroup.Input
                  placeholder="e.g. 3500"
                  type="number"
                  min={2500}
                  max={10000}
                  step={100}
                />

                <InputGroup.Addon
                  align="inline-end"
                  className="font-mono text-xs"
                >
                  K
                </InputGroup.Addon>
              </InputGroup.Root>
              <p className="text-xs text-muted-foreground">2500K - 10000K</p>
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
  );
};

export { ExposureSection };
