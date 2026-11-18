import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Brand } from "@/components/landing/brand";
import { CopyrightYear } from "@/components/landing/copyright-year";
import { content } from "@/context/content";
import "./auth.css";

const steps = content.auth.shell.steps;

export function AuthShell({ children }: { children: ReactNode }) {
  const shell = content.auth.shell;
  return (
    <main className="auth-screen">
      <aside className="auth-story" aria-labelledby="auth-story-heading">
        <Brand className="auth-brand" />
        <div className="auth-story-content">
          <p className="auth-story-tag"><Sparkles aria-hidden="true" /> {shell.storyTag}</p>
          <h2 id="auth-story-heading">{shell.storyHeading}</h2>
          <p className="auth-story-description">{shell.storyDescription}</p>
          <ol className="auth-steps" aria-label={shell.journeyLabel}>
            {steps.map((step, index) => (
              <li key={step} className="auth-step" data-highlighted={index === 0}>
                <span className="auth-step-number" aria-hidden="true">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </aside>
      <section className="auth-form-panel" aria-label={shell.formPanelLabel}>
        <header className="auth-panel-header">
          <Brand className="auth-mobile-brand" />
          <Link href="/" className="auth-back"><ArrowLeft aria-hidden="true" /> {shell.backToWebsite}</Link>
        </header>
        <div className="auth-form-content">{children}</div>
        <footer className="auth-footer">
          <span suppressHydrationWarning>© <CopyrightYear /> {content.brand.name}</span>
          <nav aria-label={shell.accountPoliciesLabel}><Link href="/policies/privacy">{content.common.privacy}</Link><Link href="/policies/terms">{content.common.serviceTerms}</Link></nav>
        </footer>
      </section>
    </main>
  );
}
