import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Brand } from "@/components/landing/brand";
import "./auth.css";

export function AuthShell({ children, mode }: { children: ReactNode; mode: "login" | "signup" }) {
  const steps = [
    mode === "signup" ? "Create your account" : "Sign in to your account",
    "Tell us about your business",
    "Shape your next chapter",
  ];
  return (
    <main className="auth-screen">
      <div className="auth-card">
        <aside className="auth-story" aria-labelledby="auth-story-heading">
          <Brand className="auth-brand" />
          <div className="auth-story-content">
            <p className="auth-story-tag"><Sparkles aria-hidden="true" /> Your business, connected</p>
            <h2 id="auth-story-heading">{mode === "signup" ? "Start your journey." : "Your next chapter starts here."}</h2>
            <p className="auth-story-description">{mode === "signup" ? "A few simple steps to bring your business into focus." : "Pick up where you left off. Let’s build what’s next."}</p>
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
        <section className="auth-form-panel" aria-label={mode === "signup" ? "Create your account" : "Sign in to your account"}>
          <Link href="/" className="auth-back"><ArrowLeft aria-hidden="true" /> Back to website</Link>
          <div className="auth-form-content">{children}</div>
          <footer className="auth-footer">
            <span>© {new Date().getFullYear()} Starter Shifter</span>
            <nav aria-label="Account policies"><Link href="/policies/privacy">Privacy</Link><Link href="/policies/terms">Terms</Link></nav>
          </footer>
        </section>
      </div>
    </main>
  );
}
