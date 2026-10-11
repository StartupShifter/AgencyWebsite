"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { PrivacySettings } from "./privacy-notice";

export function OnboardingWelcome({ privacy, name, preview = false, development = false, busy = false, error, onStart }: { privacy: PrivacySettings; name?: string; preview?: boolean; development?: boolean; busy?: boolean; error?: string; onStart?: () => Promise<void> }) {
  const [accepted, setAccepted] = useState(false);
  const consentId = useId();
  const ready = privacy.approved || preview;

  return <main className="ob-start" aria-labelledby="ob-start-heading">
    <p className="ob-start-greeting">{name ? `Welcome, ${name.trim().split(/\s+/)[0]}.` : "Welcome to Starter Shifter."}</p>
    <h1 id="ob-start-heading">Let’s get to know your business.</h1>
    <p className="ob-start-description">A few questions about your business and goals will help us plan your project. You can save your progress and return anytime.</p>
    <form onSubmit={event => { event.preventDefault(); if (ready && accepted && !busy) void onStart?.(); }}>
      <div className="ob-start-consent">
        <Checkbox id={consentId} checked={accepted} onCheckedChange={setAccepted} disabled={busy} />
        <label htmlFor={consentId}>I’ve read the <Link href="/policies/onboarding-privacy" target="_blank" rel="noopener noreferrer">privacy information<span className="sr-only"> (opens in a new tab)</span></Link> and agree to Starter Shifter using my details to prepare and deliver my project.</label>
      </div>
      <Button type="submit" variant="emerald" size="marketing" disabled={!accepted || !ready || busy}>{busy ? "Saving…" : "Continue"}<ArrowRight size={17} aria-hidden="true" /></Button>
      {error && <p className="ob-error" role="alert">{error}</p>}
    </form>
    {!ready && <p className="ob-start-status" role="status">Onboarding is temporarily paused. Please return when it reopens.{development && <> <Link href="/onboarding/preview">Try the preview</Link>.</>}</p>}
    {preview && <p className="ob-start-status">Preview only. Please use example details.</p>}
    <Link className="ob-start-terms" href="/policies/terms" target="_blank" rel="noopener noreferrer">Service terms<span className="sr-only"> (opens in a new tab)</span></Link>
  </main>;
}
