// Accept only our own client routes, never arbitrary or protocol-relative URLs.
export function safeAuthRedirect(value?: string): string {
  if (value === "/dashboard" || value === "/onboarding" || value?.startsWith("/onboarding/")) {
    if (!value.includes("\\") && !/[\r\n]/.test(value)) return value;
  }
  return "/onboarding";
}
