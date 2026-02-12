import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";

import { QueryProvider } from "@/shared/components/QueryProvider";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "A simple photo gallery built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={`antialiased dark`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
