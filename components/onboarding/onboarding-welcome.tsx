"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { JourneyArtwork } from "./journey-artwork";
import { Coffee, PencilLine, Route, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { PrivacySettings } from "./privacy-notice";
import { useI18n } from "@/context/i18n-context";

export function OnboardingWelcome({ privacy, name, phaseCount, preview = false, development = false, busy = false, error, onStart }: { privacy: PrivacySettings; name?: string; phaseCount: number; preview?: boolean; development?: boolean; busy?: boolean; error?: string; onStart?: () => Promise<void> }) {
  const { content } = useI18n();
  const welcome = content.onboarding.welcome;
  const [accepted, setAccepted] = useState(false);
  const consentId = useId();
  const ready = privacy.approved || preview;

  return <main className="ob-start" aria-labelledby="ob-start-heading">
    <aside className="ob-welcome-story"><span className="ob-story-label">{welcome.storyLabel}</span><h2>{welcome.storyTitleLines[0]}<br />{welcome.storyTitleLines[1]}</h2><JourneyArtwork /><p>{welcome.storyFooterLines[0]}<br />{welcome.storyFooterLines[1]}</p></aside>
    <div className="ob-start-body">
    <p className="ob-start-greeting">{name ? `${welcome.greetingNamePrefix}${name.trim().split(/\s+/)[0]}.` : welcome.greeting}</p>
    <h1 id="ob-start-heading">{welcome.heading}</h1>
    <p className="ob-start-description">{welcome.descriptionPrefix}{phaseCount}{welcome.descriptionSuffix}</p>
    <ul className="ob-welcome-promises">{welcome.promises.map((promise, index) => <li key={promise}>{index === 0 ? <PencilLine aria-hidden="true" /> : index === 1 ? <Route aria-hidden="true" /> : <Coffee aria-hidden="true" />}<span>{promise}</span></li>)}</ul>
    <form onSubmit={event => { event.preventDefault(); if (ready && accepted && !busy) void onStart?.(); }}>
      <div className="ob-start-consent">
        <Checkbox id={consentId} checked={accepted} onCheckedChange={setAccepted} disabled={busy} />
        <label htmlFor={consentId}>{welcome.consentBefore}<Link href="/policies/onboarding-privacy" target="_blank" rel="noopener noreferrer">{welcome.consentLink}<span className="sr-only"> ({content.common.opensInNewTab})</span></Link>{welcome.consentAfter}</label>
      </div>
      <Button type="submit" variant="default" size="marketing" disabled={!accepted || !ready || busy}>{busy ? welcome.saving : welcome.begin}<ArrowRight size={17} aria-hidden="true" /></Button>
      {error && <p className="ob-error" role="alert">{error}</p>}
    </form>
    {!ready && <p className="ob-start-status" role="status">{welcome.paused}{development && <> <Link href="/onboarding/preview">{welcome.tryPreview}</Link>.</>}</p>}
    {preview && <p className="ob-start-status">{welcome.previewOnly}</p>}
    <Link className="ob-start-terms" href="/policies/terms" target="_blank" rel="noopener noreferrer">{welcome.serviceTerms}<span className="sr-only"> ({content.common.opensInNewTab})</span></Link>
    </div>
  </main>;
}
