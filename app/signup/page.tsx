import { Suspense } from "react";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import type { AuthSearchParams } from "@/components/auth/auth-page";
import { safeAuthRedirect } from "@/lib/auth-redirect";

async function SignupRedirect({ searchParams }: { searchParams: AuthSearchParams }) {
  await connection();
  const params = await searchParams;
  const query = new URLSearchParams();
  if (params.next) query.set("next", safeAuthRedirect(params.next));
  if (params.error) query.set("error", "social");
  return redirect(`/login${query.size ? `?${query}` : ""}`);
}

export default function SignupPage(props: { searchParams: AuthSearchParams }) {
  return <Suspense fallback={null}><SignupRedirect {...props} /></Suspense>;
}
