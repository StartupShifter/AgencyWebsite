"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { JourneyArtwork } from "./journey-artwork";
import { Coffee, PencilLine, Route, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { PrivacySettings } from "./privacy-notice";

export function OnboardingWelcome({ privacy, name, preview = false, development = false, busy = false, error, onStart }: { privacy: PrivacySettings; name?: string; preview?: boolean; development?: boolean; busy?: boolean; error?: string; onStart?: () => Promise<void> }) {
  const [accepted, setAccepted] = useState(false);
  const consentId = useId();
  const ready = privacy.approved || preview;

  return <main className="ob-start" aria-labelledby="ob-start-heading">
    <aside className="ob-welcome-story"><span className="ob-story-label">Your next chapter starts here</span><h2>Big ideas.<br />Small steps.</h2><JourneyArtwork /><p>You bring the story.<br />We’ll help connect the dots.</p></aside>
    <div className="ob-start-body">
    <p className="ob-start-greeting">{name ? `Welcome, ${name.trim().split(/\s+/)[0]}.` : "Welcome to Starter Shifter."}</p>
    <h1 id="ob-start-heading">Let’s get to know your business.</h1>
    <p className="ob-start-description">Tell us about your business, what’s working, and what you’d love to change. Each phase has up to five questions, then you’re back at your dashboard.</p>
    <ul className="ob-welcome-promises"><li><PencilLine aria-hidden="true" /><span>Small phases. Up to five questions each.</span></li><li><Route aria-hidden="true" /><span>Questions shaped around your project</span></li><li><Coffee aria-hidden="true" /><span>Save, take a break, come back anytime</span></li></ul>
    <form onSubmit={event => { event.preventDefault(); if (ready && accepted && !busy) void onStart?.(); }}>
      <div className="ob-start-consent">
        <Checkbox id={consentId} checked={accepted} onCheckedChange={setAccepted} disabled={busy} />
        <label htmlFor={consentId}>I’ve read the <Link href="/policies/onboarding-privacy" target="_blank" rel="noopener noreferrer">privacy information<span className="sr-only"> (opens in a new tab)</span></Link> and agree to Starter Shifter using my details to prepare and deliver my project.</label>
      </div>
      <Button type="submit" variant="default" size="marketing" disabled={!accepted || !ready || busy}>{busy ? "Saving…" : "Let’s begin"}<ArrowRight size={17} aria-hidden="true" /></Button>
      {error && <p className="ob-error" role="alert">{error}</p>}
    </form>
    {!ready && <p className="ob-start-status" role="status">Onboarding is temporarily paused. Please return when it reopens.{development && <> <Link href="/onboarding/preview">Try the preview</Link>.</>}</p>}
    {preview && <p className="ob-start-status">Preview only. Please use example details.</p>}
    <Link className="ob-start-terms" href="/policies/terms" target="_blank" rel="noopener noreferrer">Service terms<span className="sr-only"> (opens in a new tab)</span></Link>
    </div>
  </main>;
}
