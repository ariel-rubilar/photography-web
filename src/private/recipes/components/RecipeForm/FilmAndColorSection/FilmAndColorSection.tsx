import { Card } from "@/shared/components/ui/Card";
import {
  FILM_SIMULATIONS,
  DYNAMIC_RANGE_OPTIONS,
  GRAIN_EFFECT_OPTIONS,
  COLOR_CHROME_OPTIONS,
} from "../options";
import { SelectField } from "../SelectField";
import { Heading } from "@/shared/components/ui/Heading";
import { Text } from "@/shared/components/ui/Text";
import { Film } from "lucide-react";
import { Separator } from "@/shared/components/ui/Separator";

const FilmAndColorSection = () => {
  return (
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
  );
};

export { FilmAndColorSection };
