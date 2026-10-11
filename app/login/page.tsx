import type { Metadata } from "next";
import { AuthPage, type AuthSearchParams } from "@/components/auth/auth-page";

export const metadata: Metadata = { title: "Sign in | Starter Shifter", robots: { index: false, follow: false } };

export default function LoginPage({ searchParams }: { searchParams: AuthSearchParams }) {
  return <AuthPage mode="login" searchParams={searchParams} />;
}
