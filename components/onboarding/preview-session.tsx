"use client";

import { useCallback, useState, type ReactNode } from "react";
import { SessionProvider } from "convex-helpers/react/sessions";
import type { SessionId } from "convex-helpers/server/sessions";

function useLocalPreviewSession(key: string, initialValue: SessionId | undefined) {
  const [value, setValue] = useState<SessionId | undefined>(() => {
    if (typeof window === "undefined") return initialValue;
    return (window.localStorage.getItem(key) as SessionId | null) ?? initialValue;
  });
  const update = useCallback((next: SessionId | undefined) => {
    if (next) window.localStorage.setItem(key, next);
    else window.localStorage.removeItem(key);
    setValue(next);
  }, [key]);
  return [value, update] as const;
}

export function PreviewSessionProvider({ children }: { children: ReactNode }) {
  return <SessionProvider ssrFriendly storageKey="starter-shifter-onboarding-session-v1" useStorage={useLocalPreviewSession}>{children}</SessionProvider>;
}
