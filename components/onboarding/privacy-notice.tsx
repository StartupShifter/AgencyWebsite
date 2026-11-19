"use client";

import Link from "next/link";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { useI18n } from "@/context/i18n-context";

export type PrivacySettings = { approved: boolean; text: string; contact: string; retention: string; version: string };

export function PrivacyNotice({ privacy, compact = false, preview = false }: { privacy: PrivacySettings; compact?: boolean; preview?: boolean }) {
  const { content } = useI18n();
  const copy = content.onboarding.privacyNotice;
  const privacyCopy = content.onboarding.privacyCopy;
  return <section className={`ob-privacy ${compact ? "ob-privacy-compact" : ""}`} aria-label={copy.ariaLabel}>
    <div className="ob-privacy-heading"><ShieldCheck size={20} aria-hidden="true" /><h2>{copy.heading}</h2></div>
    <p>{privacyCopy.purpose}</p>
    <details className="ob-privacy-details" open={compact || undefined}>
      <summary>{copy.howWeCare}<ChevronDown size={16} aria-hidden="true" /></summary>
      <div>
        <p>{privacyCopy.responsibility}</p>
        <p>{privacyCopy.safeSharing}</p>
        {preview ? <p>{copy.previewNote}</p> : privacy.approved ? <><p className="ob-policy-text">{privacy.text}</p>{privacy.retention && <p>{copy.retentionPrefix}{privacy.retention}</p>}{privacy.contact && <p>{copy.contactPrefix}{privacy.contact}</p>}</> : <p>{copy.paused}</p>}
        <nav aria-label={copy.navLabel}><Link href="/policies/onboarding-privacy" target="_blank" rel="noopener noreferrer">{copy.privacyInformation}<span className="sr-only"> ({content.common.opensInNewTab})</span></Link><Link href="/policies/terms" target="_blank" rel="noopener noreferrer">{copy.serviceTerms}<span className="sr-only"> ({content.common.opensInNewTab})</span></Link></nav>
      </div>
    </details>
  </section>;
}
