import { Button } from "@/shared/components/ui/Button";
import { RotateCcw, Check } from "lucide-react";

const Actions = () => {
  return (
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
  );
};

export { Actions };
