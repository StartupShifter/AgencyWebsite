"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { content } from "@/context/content";

export function SignOutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  return <div><Button variant="ghost" disabled={pending} onClick={async () => {
    setPending(true); setError("");
    try {
      const result = await authClient.signOut();
      if (result.error) { setError(content.onboarding.portal.signOutError); return; }
      router.replace("/login"); router.refresh();
    } catch { setError(content.onboarding.portal.signOutError); }
    finally { setPending(false); }
  }}><LogOut className="size-4" />{pending ? content.onboarding.portal.signingOut : content.onboarding.portal.signOut}</Button>{error ? <p role="alert" className="text-xs text-destructive">{error}</p> : null}</div>;
}
