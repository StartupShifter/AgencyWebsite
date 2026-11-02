"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Eye, EyeOff, Mail } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel, FieldError, FieldSeparator } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Spinner } from "@/components/ui/spinner";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Provider = "google" | "facebook";

function ProviderIcon({ provider }: { provider: Provider }) {
  return provider === "google" ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" data-icon="inline-start"><path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.52h3.24c1.9-1.75 2.98-4.33 2.98-7.37Z"/><path fill="#34A853" d="M12 22c2.7 0 4.96-.9 6.62-2.4l-3.24-2.52c-.9.6-2.05.97-3.38.97-2.6 0-4.8-1.76-5.6-4.12H3.06v2.6A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.4 13.93a6 6 0 0 1 0-3.86v-2.6H3.06a10 10 0 0 0 0 9.06l3.34-2.6Z"/><path fill="#EA4335" d="M12 5.95c1.47 0 2.79.5 3.82 1.5l2.87-2.88A9.62 9.62 0 0 0 12 2a10 10 0 0 0-8.94 5.47l3.34 2.6C7.2 7.71 9.4 5.95 12 5.95Z"/></svg>
  ) : <svg aria-hidden="true" viewBox="0 0 24 24" data-icon="inline-start" fill="#1877F2"><path d="M24 12a12 12 0 1 0-13.875 11.855V15.47H7.08V12h3.045V9.356c0-3.007 1.792-4.668 4.533-4.668 1.313 0 2.686.234 2.686.234v2.953h-1.513c-1.49 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385A12 12 0 0 0 24 12Z"/></svg>;
}

export function AuthForm({ googleEnabled, facebookEnabled, redirectTo, initialError }: {
  googleEnabled: boolean;
  facebookEnabled: boolean;
  redirectTo: string;
  initialError?: string;
}) {
  const [emailOpen, setEmailOpen] = useState(false);
  const emailTriggerRef = useRef<HTMLButtonElement>(null);
  const [pending, setPending] = useState<Provider | null>(null);
  const [error, setError] = useState(initialError ?? "");
  const errorRef = useRef<HTMLDivElement>(null);

  async function signInSocial(provider: Provider) {
    if (pending) return;
    setError("");
    setPending(provider);
    try {
      const result = await authClient.signIn.social({
        provider,
        callbackURL: redirectTo,
        errorCallbackURL: `/login?error=social&next=${encodeURIComponent(redirectTo)}`,
      });
      if (!result.error) return;
    } catch {
      // Network errors use the same recovery path as provider errors.
    }
    setError("We couldn’t connect your account. Try again or continue with email.");
    setPending(null);
    requestAnimationFrame(() => errorRef.current?.focus());
  }

  return (
    <div className="auth-form" data-method={emailOpen ? "email" : "social"}>
      <header className="auth-form-heading">
        <h1>Join us.</h1>
        <p>New here or returning? Continue to your client workspace.</p>
      </header>
      {emailOpen ? (
        <EmailAuthForm redirectTo={redirectTo} onBack={() => {
          setEmailOpen(false);
          requestAnimationFrame(() => emailTriggerRef.current?.focus({ preventScroll: true }));
        }} />
      ) : (
        <>
          <div className="auth-social" role="group" aria-label="Continue with a social account" aria-busy={pending !== null}>
            <div className="auth-providers">
              {([{ provider: "google", label: "Google", enabled: googleEnabled }, { provider: "facebook", label: "Facebook", enabled: facebookEnabled }] as const).map(({ provider, label, enabled }) => (
                <Button key={provider} type="button" variant="outline" size="marketing" className="auth-provider" disabled={pending !== null || !enabled} onClick={() => signInSocial(provider)} aria-describedby={!enabled ? "social-help" : undefined}>
                  {pending === provider ? <Spinner data-icon="inline-start" /> : <ProviderIcon provider={provider} />}
                  {pending === provider ? "Connecting…" : `Continue with ${label}`}
                </Button>
              ))}
            </div>
            {!googleEnabled || !facebookEnabled ? <p id="social-help" className="auth-social-help">{!googleEnabled && !facebookEnabled ? "Google and Facebook sign-in are coming soon. You can use email for now." : `${!googleEnabled ? "Google" : "Facebook"} sign-in is coming soon.`}</p> : null}
            {error ? <Alert variant="destructive" role="alert" ref={errorRef} tabIndex={-1}><AlertDescription>{error}</AlertDescription></Alert> : null}
          </div>
          <div className="auth-email-option">
            <FieldSeparator>or</FieldSeparator>
            <Button ref={emailTriggerRef} type="button" variant="ghost" size="marketing" className="auth-email-trigger" disabled={pending !== null} onClick={() => { setError(""); setEmailOpen(true); }}>
              <Mail data-icon="inline-start" aria-hidden="true" /> Continue with email
            </Button>
          </div>
          <p className="auth-workspace-note">Share your business brief and follow your project in one place.</p>
          <p className="auth-privacy-note">Read how we use your account and project details in our <Link href="/policies/onboarding-privacy">privacy information</Link>.</p>
        </>
      )}
    </div>
  );
}

function EmailAuthForm({ redirectTo, onBack }: { redirectTo: string; onBack: () => void }) {
  const router = useRouter();
  const [signup, setSignup] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => { emailRef.current?.focus({ preventScroll: true }); }, []);

  function showError(message: string) {
    setError(message);
    requestAnimationFrame(() => errorRef.current?.focus({ preventScroll: true }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const accountName = name.trim();
    if (signup && !accountName) { showError("Please enter your name."); return; }
    setError("");
    setPending(true);
    try {
      const result = signup
        ? await authClient.signUp.email({ email, password, name: accountName })
        : await authClient.signIn.email({ email, password, rememberMe });
      if (result.error) {
        showError(result.error.status === 429 ? "Too many attempts. Please wait a moment and try again." : signup ? "We couldn’t create your account. Try signing in or use another email." : "We couldn’t sign you in. Check your email and password.");
        return;
      }
      router.replace(redirectTo);
      router.refresh();
    } catch { showError("We couldn’t connect. Please try again in a moment."); }
    finally { setPending(false); }
  }

  return (
    <section className="auth-email-view" aria-label="Email account access">
      <div className="auth-email-navigation">
        <Button type="button" variant="ghost" size="icon-lg" className="auth-method-back" onClick={onBack} disabled={pending} aria-label="Back to all sign-in options"><ArrowLeft aria-hidden="true" /></Button>
        <ToggleGroup className="auth-email-mode" size="sm" aria-label="Email account access" value={[signup ? "signup" : "login"]} disabled={pending} onValueChange={(values) => {
          if (!values.length) return;
          setSignup(values[0] === "signup");
          setError("");
          setPasswordVisible(false);
        }}>
          <ToggleGroupItem value="login">Sign in</ToggleGroupItem>
          <ToggleGroupItem value="signup">Create account</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <form className="auth-email-form" onSubmit={submit} aria-label={signup ? "Create an account with email" : "Sign in with email"} aria-busy={pending}>
        <FieldGroup>
          <Field data-disabled={pending}>
            <FieldLabel htmlFor="auth-email">Email address</FieldLabel>
            <Input ref={emailRef} variant="soft" id="auth-email" name="email" type="email" autoComplete="email" autoCapitalize="none" spellCheck={false} placeholder="you@business.com" required disabled={pending} />
          </Field>
          <Field data-disabled={pending}>
            <FieldLabel htmlFor="auth-password">Password</FieldLabel>
            <InputGroup variant="soft">
              <InputGroupInput id="auth-password" name="password" type={passwordVisible ? "text" : "password"} autoComplete={signup ? "new-password" : "current-password"} placeholder={signup ? "Create a strong password" : "Enter your password"} required minLength={signup ? 12 : undefined} maxLength={128} value={password} onChange={(event) => setPassword(event.target.value)} disabled={pending} aria-describedby={signup ? "auth-form-status" : undefined} />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-sm" onClick={() => setPasswordVisible((visible) => !visible)} aria-label={passwordVisible ? "Hide password" : "Show password"} aria-pressed={passwordVisible} disabled={pending}>{passwordVisible ? <EyeOff /> : <Eye />}</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <div className="auth-account-slot">
            {signup ? <Field data-disabled={pending}>
              <FieldLabel htmlFor="auth-name">Your name</FieldLabel>
              <Input variant="soft" id="auth-name" name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} value={name} onChange={(event) => setName(event.target.value)} disabled={pending} />
            </Field> : <label className="auth-remember"><input name="remember" type="checkbox" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} disabled={pending} /> Keep me signed in</label>}
          </div>
        </FieldGroup>
        <div id="auth-form-status" className="auth-form-status">
          {error ? <FieldError ref={errorRef} tabIndex={-1}>{error}</FieldError> : signup ? <p>Use at least 12 characters for your password.</p> : null}
        </div>
        <Button type="submit" variant="emerald" size="marketing" className="auth-submit" disabled={pending}>
          {pending ? <Spinner data-icon="inline-start" /> : null}
          {pending ? (signup ? "Creating your account…" : "Signing in…") : (signup ? "Create account" : "Sign in")}
          {!pending ? <ArrowRight data-icon="inline-end" aria-hidden="true" /> : null}
        </Button>
      </form>
    </section>
  );
}
