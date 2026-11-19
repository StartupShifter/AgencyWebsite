"use client";
import Link from "next/link";
import { ArrowUpRight, LogOut } from "lucide-react";
import { Brand } from "@/components/landing/brand";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";
import { useI18n } from "@/context/i18n-context";
import "./onboarding.css";

export function PortalShell({ children, preview = false, focused = false, beforeLeave, businessName, userName }: { children: ReactNode; preview?: boolean; focused?: boolean; beforeLeave?: () => Promise<unknown>; businessName?: string; userName?: string }) {
  const { content } = useI18n();
  const router = useRouter();
  const portal = content.onboarding.portal;
  const [error, setError] = useState("");
  const [signingOut, setSigningOut] = useState(false);
  async function signOut() {
    setSigningOut(true);
    try {
      await beforeLeave?.();
      const result = await authClient.signOut();
      if (result.error) throw new Error(portal.signOutError);
      router.replace("/login"); router.refresh();
    } catch (error) { setError(error instanceof Error ? error.message : portal.saveProgressError); setSigningOut(false); }
  }
  return <div className={focused ? "ob-portal ob-portal-focused" : "ob-portal"}><header className="ob-header" onClickCapture={event => {
    const link = (event.target as HTMLElement).closest("a");
    if (!beforeLeave || !link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    void beforeLeave().then(() => router.push(link.getAttribute("href") ?? "/"), error => setError(error instanceof Error ? error.message : portal.unableToSaveProgress));
  }}><div className="ob-header-company"><Brand />{!focused && <div className="ob-header-identity"><span>{businessName || portal.yourProjectWorkspace}</span><small>{userName || portal.clientPortal}</small></div>}</div>{!focused && <div className="ob-header-links"><Link href={preview ? "/dashboard/preview" : "/dashboard"}>{portal.myWorkspace}<ArrowUpRight size={16} /></Link>{!preview && <Button variant="ghost" onClick={() => void signOut()} disabled={signingOut}><LogOut size={16} />{signingOut ? portal.signingOut : portal.signOut}</Button>}</div>}</header>{error && <p role="alert" className="ob-error ob-top-error">{error}</p>}{children}</div>;
}
