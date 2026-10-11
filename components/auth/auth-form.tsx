"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel, FieldDescription, FieldSeparator } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Spinner } from "@/components/ui/spinner";

type Provider = "google" | "facebook";

function ProviderIcon({ provider }: { provider: Provider }) {
  return provider === "google" ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4"><path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.52h3.24c1.9-1.75 2.98-4.33 2.98-7.37Z"/><path fill="#34A853" d="M12 22c2.7 0 4.96-.9 6.62-2.4l-3.24-2.52c-.9.6-2.05.97-3.38.97-2.6 0-4.8-1.76-5.6-4.12H3.06v2.6A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.4 13.93a6 6 0 0 1 0-3.86v-2.6H3.06a10 10 0 0 0 0 9.06l3.34-2.6Z"/><path fill="#EA4335" d="M12 5.95c1.47 0 2.79.5 3.82 1.5l2.87-2.88A9.62 9.62 0 0 0 12 2a10 10 0 0 0-8.94 5.47l3.34 2.6C7.2 7.71 9.4 5.95 12 5.95Z"/></svg>
  ) : <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="#1877F2"><path d="M24 12a12 12 0 1 0-13.875 11.855V15.47H7.08V12h3.045V9.356c0-3.007 1.792-4.668 4.533-4.668 1.313 0 2.686.234 2.686.234v2.953h-1.513c-1.49 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385A12 12 0 0 0 24 12Z"/></svg>;
}

export function AuthForm({ mode, googleEnabled, facebookEnabled, redirectTo, initialError }: {
  mode: "login" | "signup";
  googleEnabled: boolean;
  facebookEnabled: boolean;
  redirectTo: string;
  initialError?: string;
}) {
  const signup = mode === "signup";
  const router = useRouter();
  const [pending, setPending] = useState<"password" | Provider | null>(null);
  const [error, setError] = useState(initialError ?? "");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const errorRef = useRef<HTMLDivElement>(null);

  function showError(message: string) {
    setError(message);
    requestAnimationFrame(() => errorRef.current?.focus());
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const name = String(data.get("name") ?? "").trim();
    if (signup && !name) { showError("Please enter your name."); return; }
    setError("");
    setPending("password");
    try {
      const result = signup
        ? await authClient.signUp.email({ email, password, name })
        : await authClient.signIn.email({ email, password, rememberMe: data.get("remember") === "on" });
      if (result.error) {
        showError(result.error.status === 429 ? "Too many attempts. Please wait a moment and try again." : signup ? (result.error.message ?? "We couldn’t create your account. Please try again.") : "We couldn’t sign you in. Check your email and password.");
        return;
      }
      router.replace(redirectTo);
      router.refresh();
    } catch { showError("We couldn’t connect. Please try again in a moment."); }
    finally { setPending(null); }
  }

  async function signInSocial(provider: Provider) {
    if (pending) return;
    setError("");
    setPending(provider);
    try {
      const result = await authClient.signIn.social({
        provider, callbackURL: redirectTo,
        errorCallbackURL: `/${mode}?error=social&next=${encodeURIComponent(redirectTo)}`,
      });
      if (result.error) { showError("We couldn’t connect your account. Please try again."); setPending(null); }
    } catch { showError("We couldn’t connect your account. Please try again."); setPending(null); }
  }

  return (
    <div className="auth-form">
      <header className="auth-form-heading">
        <h1>{signup ? "Join us." : "Welcome back."}</h1>
        <p>{signup ? "Create an account to get started." : "Sign in to your client workspace."}</p>
      </header>
      <form onSubmit={submit} aria-busy={pending !== null}>
        <FieldGroup>
          {error ? <Alert variant="destructive" role="alert" ref={errorRef} tabIndex={-1}><AlertDescription>{error}</AlertDescription></Alert> : null}
          {signup ? <Field data-disabled={pending !== null}><FieldLabel htmlFor="auth-name">Your name</FieldLabel><Input id="auth-name" name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} disabled={pending !== null} className="auth-input" /></Field> : null}
          <Field data-disabled={pending !== null}><FieldLabel htmlFor="auth-email">Email address</FieldLabel><Input id="auth-email" name="email" type="email" autoComplete="email" autoCapitalize="none" spellCheck={false} placeholder="you@business.com" required disabled={pending !== null} className="auth-input" /></Field>
          <Field data-disabled={pending !== null}>
            <FieldLabel htmlFor="auth-password">Password</FieldLabel>
            <InputGroup className="auth-password-group">
              <InputGroupInput id="auth-password" name="password" type={passwordVisible ? "text" : "password"} autoComplete={signup ? "new-password" : "current-password"} placeholder={signup ? "Create a strong password" : "Enter your password"} required minLength={signup ? 12 : undefined} maxLength={128} value={password} onChange={(event) => setPassword(event.target.value)} disabled={pending !== null} aria-describedby={signup ? "password-help" : undefined} />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-sm" onClick={() => setPasswordVisible((visible) => !visible)} aria-label={passwordVisible ? "Hide password" : "Show password"} aria-pressed={passwordVisible} disabled={pending !== null}>{passwordVisible ? <EyeOff /> : <Eye />}</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            {signup ? <FieldDescription id="password-help">{password.length >= 12 ? "✓ At least 12 characters. You’re all set." : "Use at least 12 characters."}</FieldDescription> : null}
          </Field>
          {!signup ? <label className="auth-remember"><input name="remember" type="checkbox" defaultChecked disabled={pending !== null} /> Keep me signed in</label> : null}
          <Button type="submit" variant="emerald" size="marketing" className="auth-submit" disabled={pending !== null}>{pending === "password" ? <Spinner data-icon="inline-start" /> : null}{pending === "password" ? (signup ? "Creating your account…" : "Signing in…") : (signup ? "Create account" : "Sign in")}{pending !== "password" ? <ArrowRight data-icon="inline-end" aria-hidden="true" /> : null}</Button>
        </FieldGroup>
      </form>
      <p className="auth-switch">{signup ? "Already have an account?" : "New to Starter Shifter?"} <Link href={`/${signup ? "login" : "signup"}?next=${encodeURIComponent(redirectTo)}`}>{signup ? "Sign in" : "Create an account"}</Link></p>
      <div className="auth-social">
        <FieldSeparator>or</FieldSeparator>
        <div className="auth-providers">
          {([{ provider: "google", label: "Google", enabled: googleEnabled }, { provider: "facebook", label: "Facebook", enabled: facebookEnabled }] as const).map(({ provider, label, enabled }) => (
            <Button key={provider} type="button" variant="outline" className="auth-provider" disabled={pending !== null || !enabled} onClick={() => signInSocial(provider)} aria-label={`Continue with ${label}`} aria-describedby={!enabled ? "social-help" : undefined}>
              {pending === provider ? <Spinner data-icon="inline-start" /> : <ProviderIcon provider={provider} />}{pending === provider ? "Connecting…" : `Continue with ${label}`}
            </Button>
          ))}
        </div>
        {!googleEnabled || !facebookEnabled ? <p id="social-help" className="auth-social-help">{!googleEnabled && !facebookEnabled ? "Social sign-in will be available soon. Continue with email." : `${!googleEnabled ? "Google" : "Facebook"} sign-in will be available soon.`}</p> : null}
      </div>
      {signup ? <p className="auth-privacy-note">Read how account and project details are used in our <Link href="/policies/onboarding-privacy">privacy information</Link>. Your project scope and service terms follow your approved agreement.</p> : null}
    </div>
  );
}
