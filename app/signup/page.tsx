import type { Metadata } from "next";
import { AuthPage, type AuthSearchParams } from "@/components/auth/auth-page";

export const metadata: Metadata = { title: "Create account | Starter Shifter", robots: { index: false, follow: false } };

export default function SignupPage({ searchParams }: { searchParams: AuthSearchParams }) {
  return <AuthPage mode="signup" searchParams={searchParams} />;
}
