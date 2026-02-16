import { Card } from "@/shared/components/ui/Card";
import { Heading } from "@/shared/components/ui/Heading";
import { Input } from "@/shared/components/ui/Input";
import { Label } from "@/shared/components/ui/Label";
import { Separator } from "@/shared/components/ui/Separator";
import { Text } from "@/shared/components/ui/Text";
import { Camera, Link2 } from "lucide-react";

const BasicInformationSection = () => {
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
  );
};

export { BasicInformationSection };
