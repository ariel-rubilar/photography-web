"use client";

import { Empty } from "@/shared/components/ui/Empty";

const ErrorPage = ({}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Empty.Root>
        <Empty.Title>Something went wrong</Empty.Title>
        <Empty.Description>
          An unexpected error has occurred. Please try again later.
        </Empty.Description>
      </Empty.Root>
    </div>
  );
};

export default ErrorPage;
