"use client";

/**
 * Renders the copyright year after hydration so static shells (including the
 * auth loading skeleton) can be prerendered without reading the clock.
 */
export function CopyrightYear() {
  return <>{new Date().getFullYear()}</>;
}
