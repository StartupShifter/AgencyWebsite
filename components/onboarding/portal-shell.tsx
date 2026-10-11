"use client";
import Link from "next/link";
import { ArrowUpRight, LogOut } from "lucide-react";
import { Brand } from "@/components/landing/brand";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";
import "./onboarding.css";

export function PortalShell({ children, preview = false, beforeLeave, businessName, userName }: { children: ReactNode; preview?: boolean; beforeLeave?: () => Promise<unknown>; businessName?: string; userName?: string }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [signingOut, setSigningOut] = useState(false);
  async function signOut() {
    setSigningOut(true);
    try {
      await beforeLeave?.();
      const result = await authClient.signOut();
      if (result.error) throw new Error("Unable to sign out. Please try again.");
      router.replace("/login"); router.refresh();
    } catch (error) { setError(error instanceof Error ? error.message : "Unable to save your progress. Please try again."); setSigningOut(false); }
  }
  return <div className="ob-portal"><header className="ob-header" onClickCapture={event => {
    const link = (event.target as HTMLElement).closest("a");
    if (!beforeLeave || !link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    void beforeLeave().then(() => router.push(link.getAttribute("href") ?? "/"), error => setError(error instanceof Error ? error.message : "Unable to save your progress."));
  }}><div className="ob-header-company"><Brand /><div className="ob-header-identity"><span>{businessName || "Your project workspace"}</span><small>{userName || "Starter Shifter client portal"}</small></div></div><div className="ob-header-links"><Link href={preview ? "/dashboard/preview" : "/dashboard"}>My workspace<ArrowUpRight size={16} /></Link>{!preview && <Button variant="ghost" onClick={() => void signOut()} disabled={signingOut}><LogOut size={16} />{signingOut ? "Signing out…" : "Sign out"}</Button>}</div></header>{error && <p role="alert" className="ob-error ob-top-error">{error}</p>}{children}</div>;
}
