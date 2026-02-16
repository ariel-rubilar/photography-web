import { Skeleton } from "@/shared/components/ui/Skeleton";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Skeleton className="size-full" />
    </div>
  );
};

export default Loading;
