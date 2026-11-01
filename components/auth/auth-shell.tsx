import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Brand } from "@/components/landing/brand";
import "./auth.css";

const steps = ["Create your account", "Tell us about your business", "Shape your next chapter"];

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <main className="auth-screen">
      <aside className="auth-story" aria-labelledby="auth-story-heading">
        <Brand className="auth-brand" />
        <div className="auth-story-content">
          <p className="auth-story-tag"><Sparkles aria-hidden="true" /> Your business, connected</p>
          <h2 id="auth-story-heading">Start your journey.</h2>
          <p className="auth-story-description">A few simple steps to bring your business into focus.</p>
          <ol className="auth-steps" aria-label="Your workspace journey">
            {steps.map((step, index) => (
              <li key={step} className="auth-step" data-highlighted={index === 0}>
                <span className="auth-step-number" aria-hidden="true">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </aside>
      <section className="auth-form-panel" aria-label="Join Starter Shifter">
        <header className="auth-panel-header">
          <Brand className="auth-mobile-brand" />
          <Link href="/" className="auth-back"><ArrowLeft aria-hidden="true" /> Back to website</Link>
        </header>
        <div className="auth-form-content">{children}</div>
        <footer className="auth-footer">
          <span>© {new Date().getFullYear()} Starter Shifter</span>
          <nav aria-label="Account policies"><Link href="/policies/privacy">Privacy</Link><Link href="/policies/terms">Terms</Link></nav>
        </footer>
      </section>
    </main>
  );
}
