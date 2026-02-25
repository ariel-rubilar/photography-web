import { Card } from "@/shared/components/ui/Card";
import { Field } from "@/shared/components/ui/Field";
import { Heading } from "@/shared/components/ui/Heading";
import { Input } from "@/shared/components/ui/Input";
import { InputGroup } from "@/shared/components/ui/InputGroup";
import { Separator } from "@/shared/components/ui/Separator";
import { Text } from "@/shared/components/ui/Text";
import { Camera, Link2 } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { FormInputs } from "../schema";

const BasicInformationSection = () => {
  const form = useFormContext<FormInputs>();

  return (
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
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field.Root data-invalid={fieldState.invalid}>
                <Field.Label htmlFor="recipe-name">
                  Recipe Name <span className="text-primary">*</span>
                </Field.Label>
                <Input
                  id="recipe-name"
                  placeholder="e.g. Kodak Portra 400 Look"
                  {...field}
                />
                {fieldState.invalid && (
                  <Field.Error errors={[fieldState.error]} />
                )}
              </Field.Root>
            )}
          />

          <Controller
            name="link"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field.Root data-invalid={fieldState.invalid}>
                <Field.Label htmlFor="recipe-link">Reference Link</Field.Label>

                <InputGroup.Root data-invalid={fieldState.invalid}>
                  <InputGroup.Addon align="inline-start">
                    <Link2 />
                  </InputGroup.Addon>
                  <InputGroup.Input
                    id="recipe-link"
                    placeholder="https://fujixweekly.com/..."
                    {...field}
                  />
                </InputGroup.Root>
                {fieldState.invalid && (
                  <Field.Error errors={[fieldState.error]} />
                )}
              </Field.Root>
            )}
          />
        </div>
      </Card.Content>
    </Card.Root>
  );
};

export { BasicInformationSection };
