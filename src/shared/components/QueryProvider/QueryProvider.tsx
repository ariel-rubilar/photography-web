"use client";

import { queryClient } from "@/shared/lib/query";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const QueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { QueryProvider };
