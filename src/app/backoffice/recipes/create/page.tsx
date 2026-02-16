import { RecipeForm } from "@/private/recipes/components/RecipeForm";
import { Heading } from "@/shared/components/ui/Heading";
import { Text } from "@/shared/components/ui/Text";
import { Camera } from "lucide-react";

const CreateRecipe = () => {
  return (
    <main className="min-h-screen pb-16">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Camera className="h-5 w-5" />
          </div>
          <div>
            <Heading level={1}>Fujifilm Recipe Creator</Heading>
            <Text variant={"muted"}>
              Craft your perfect film simulation recipe
            </Text>
          </div>
        </div>
      </header>

      {/* Form */}
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <RecipeForm />
      </div>
    </main>
  );
};

export default CreateRecipe;
