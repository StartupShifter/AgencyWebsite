"use client";

import { useState, type ComponentProps, type ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { authClient } from "@/lib/auth-client";

export function ConvexClientProvider({ children, initialToken }: {
  children: ReactNode;
  initialToken?: string | null;
}) {
  const [convex] = useState(() => new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!));
  return (
    <ConvexBetterAuthProvider
      client={convex}
      // Match the admin integration's type adapter for Better Auth >= 1.6.22.
      authClient={authClient as unknown as ComponentProps<typeof ConvexBetterAuthProvider>["authClient"]}
      initialToken={initialToken}
    >
      {children}
    </ConvexBetterAuthProvider>
  );
}
