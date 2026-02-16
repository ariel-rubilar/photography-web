import { Card } from "@/shared/components/ui/Card";
import { Heading } from "@/shared/components/ui/Heading";

const SummaryItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex items-baseline justify-between gap-2 py-1">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-mono text-xs text-foreground">{value}</span>
    </div>
  );
};

const PreviewSummary = () => {
  return (
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
  );
};

export { PreviewSummary };
