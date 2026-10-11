import Link from "next/link";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { onboardingPrivacyCopy } from "@/lib/onboarding/privacy-copy";

export type PrivacySettings = { approved: boolean; text: string; contact: string; retention: string; version: string };

export function PrivacyNotice({ privacy, compact = false, preview = false }: { privacy: PrivacySettings; compact?: boolean; preview?: boolean }) {
  return <section className={`ob-privacy ${compact ? "ob-privacy-compact" : ""}`} aria-label="How we use your information">
    <div className="ob-privacy-heading"><ShieldCheck size={20} aria-hidden="true" /><h2>Your information has a purpose.</h2></div>
    <p>{onboardingPrivacyCopy.purpose}</p>
    <details className="ob-privacy-details" open={compact || undefined}>
      <summary>How we care for your details<ChevronDown size={16} aria-hidden="true" /></summary>
      <div>
        <p>{onboardingPrivacyCopy.responsibility}</p>
        <p>{onboardingPrivacyCopy.safeSharing}</p>
        {preview ? <p>This is a preview. Your sample answers are saved so you can try the journey and return to it in this browser. Use example business details.</p> : privacy.approved ? <><p className="ob-policy-text">{privacy.text}</p>{privacy.retention && <p>How long we keep your details: {privacy.retention}</p>}{privacy.contact && <p>Questions about your information? {privacy.contact}</p>}</> : <p>Onboarding is temporarily paused. Please review the current privacy information when it reopens.</p>}
        <nav aria-label="Onboarding information"><Link href="/policies/onboarding-privacy" target="_blank" rel="noopener noreferrer">Privacy information<span className="sr-only"> (opens in a new tab)</span></Link><Link href="/policies/terms" target="_blank" rel="noopener noreferrer">Service terms<span className="sr-only"> (opens in a new tab)</span></Link></nav>
      </div>
    </details>
  </section>;
}
