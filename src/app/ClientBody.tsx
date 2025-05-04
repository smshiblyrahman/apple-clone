"use client";

import type React from "react";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <body suppressHydrationWarning className="antialiased">
      {children}
    </body>
  );
}
